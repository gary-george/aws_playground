"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Auth } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { Flex, Box, Paragraph, Button } from "theme-ui";

export default function Home() {
  const [loggedIn, updateLoggedIn] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        await Auth.currentAuthenticatedUser();
        // const session = await Auth.currentSession();
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
      <Box>
        <Authenticator>
          {({ signOut, user }) => {
            updateLoggedIn(true);
            return (
              <Flex
                sx={{
                  width: "500px",
                  backgroundColor: "white",
                  p: "20px",
                  border: "1px solid #E8E8E8",
                  flexDirection: "column",
                }}
              >
                <Paragraph sx={{ mb: "60px" }}>Welcome Back,</Paragraph>
                <Paragraph style={{ fontWeight: "600" }}>
                  {user?.attributes?.email}
                </Paragraph>
                <Button
                  variant="primary"
                  style={{ color: "red", cursor: "pointer" }}
                  onClick={signOut}
                >
                  Sign out
                </Button>
              </Flex>
            );
          }}
        </Authenticator>
      </Box>
      <br />
      {loggedIn && (
        <Box sx={{ mt: "40px", width: "100%", textAlign: "center" }}>
          <Link href="/private">Go to a private page</Link>
        </Box>
      )}
    </Flex>
  );
}
