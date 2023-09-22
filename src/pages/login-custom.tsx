"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Auth } from "aws-amplify";
import { Flex, Box, Paragraph, Button, Input } from "theme-ui";

const defaultState = {
  username: "",
  password: "",
  cognitoUser: { attributes: { email: "" } },
  challenge: "",
  loading: false,
  error: "",
};

const logUserIn = async (
  currentState: any,
  updateState: any,
  updateLoggedIn: any
) => {
  try {
    updateState({ ...currentState, loading: true, error: null });
    const { username, password } = currentState;
    const user = await Auth.signIn(
      username.toLowerCase().trim(),
      password.trim()
    );

    if (user?.challengeName === "NEW_PASSWORD_REQUIRED") {
      return updateState({
        ...currentState,
        cognitoUser: user,
        challenge: "new_password",
      });
    }

    if (
      user?.challengeName === "SMS_MFA" ||
      user?.challengeName === "SOFTWARE_TOKEN_MFA"
    ) {
      return updateState({
        ...currentState,
        cognitoUser: user,
        challenge: "mfa",
      });
    }

    updateLoggedIn(true);
  } catch (e: any) {
    let error = "We are currently unable to log you in, please try again later";
    if (e.code === "NotAuthorizedException") {
      error = "Username and/or password are incorrect.";
    } else if (e.code === "CodeMismatchException") {
      error = "The code entered does not match";
    } else if (e.code === "InvalidPasswordException") {
      error =
        "Please make sure you use an upper case and lower case letter plus a digit in your password";
    } else if (e.code === "ExpiredCodeException") {
      error = "The code has already been used once";
    } else if (e.code === "UserNotFoundException") {
      error = "Username and/or password are incorrect.";
    } else if (
      e.message?.includes("PreAuthentication failed with error GoogleUser")
    ) {
      error = "Please sign in with Google";
    }

    return updateState({
      ...currentState,
      loading: false,
      error,
    });
  }
};

export default function Home() {
  const [currentState, updateState] = useState(defaultState);
  const [loggedIn, updateLoggedIn] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const user = await Auth.currentAuthenticatedUser();
        updateLoggedIn(true);
        updateState({ ...currentState, cognitoUser: user });

        //  const session = await Auth.currentSession();
        // const jwt = (await Auth.currentSession()).getIdToken().getJwtToken();
      } catch (e) {
        updateLoggedIn(false);
      }
    })();
  }, [loggedIn]);

  return (
    <Flex
      sx={{
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "white",
        flexDirection: "column",
      }}
    >
      {!loggedIn && (
        <>
          <Box
            sx={{
              width: "350px",
              minHeight: "44px",
              m: "30px auto 15px",
              "@media screen and (max-width: 500px)": {
                ml: "0px",
              },
            }}
          >
            <Paragraph
              sx={{
                fontWeight: "400",
                fontSize: "14px",
                mb: "6px",
                ml: "3px",
                color: "#333333",
              }}
            >
              Email address
            </Paragraph>
            <Input
              type="email"
              id="email"
              data-testid="email"
              name="email"
              placeholder="Enter your email address"
              onChange={(e) =>
                updateState({ ...currentState, username: e.target.value })
              }
              value={currentState.username}
              sx={{
                border: "1px #CBD5E1 solid",
                height: "44px",
                width: "330px",
                color: "#323741",
                fontSize: "14px",
              }}
            />
          </Box>
          <Box
            sx={{
              width: "350px",
              minHeight: "44px",
              m: "5px auto",
              position: "relative",
              "@media screen and (max-width: 500px)": {
                ml: "0px",
              },
            }}
          >
            <Paragraph
              sx={{
                fontWeight: "400",
                fontSize: "14px",
                mb: "6px",
                ml: "3px",
                color: "#333333",
              }}
            >
              Password
            </Paragraph>
            <Input
              type="password"
              id="password"
              data-testid="password"
              name="password"
              placeholder="Password"
              onChange={(e) =>
                updateState({ ...currentState, password: e.target.value })
              }
              value={currentState.password}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  logUserIn(currentState, updateState, updateLoggedIn);
                }
              }}
              sx={{
                border: "1px #CBD5E1 solid",
                height: "44px",
                width: "330px",
                color: "#323741",
                fontSize: "14px",
              }}
            />
          </Box>
        </>
      )}

      {loggedIn && (
        <Box sx={{ mt: "40px", width: "100%", textAlign: "center" }}>
          <Paragraph sx={{ mb: "0px" }}>Welcome Back,</Paragraph>
          <Paragraph sx={{ fontWeight: "600", mb: "160px" }}>
            {currentState?.cognitoUser?.attributes?.email}
          </Paragraph>
          <Button
            variant="primary"
            style={{ color: "red", cursor: "pointer" }}
            onClick={async () => {
              await Auth.signOut();
              updateLoggedIn(false);
              updateState(defaultState);
            }}
          >
            Sign out
          </Button>
          <br />
          <br />
          <Link href="/private">Go to a private page</Link>
        </Box>
      )}
    </Flex>
  );
}
