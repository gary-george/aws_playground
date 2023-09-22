"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Auth } from "aws-amplify";
import { Flex, Box, Paragraph } from "theme-ui";

export default function Home() {
  const router = useRouter();
  const [loading, updateLoading] = useState(true);
  useEffect(() => {
    (async () => {
      try {
        await Auth.currentAuthenticatedUser();
        updateLoading(false);
      } catch (e) {
        router.push("/");
      }
    })();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <Flex sx={{ width: "1000px", height: "500px", margin: "0 auto" }}>
      <Box
        sx={{
          width: "500px",
          backgroundColor: "white",
          p: "20px",
        }}
      >
        <Paragraph style={{ marginBottom: "60px" }}>
          This is a PRIVATE page, you are authenticated if u see this
        </Paragraph>
        <Link style={{ cursor: "pointer" }} href="/">
          Go Home
        </Link>
      </Box>
    </Flex>
  );
}
