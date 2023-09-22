import Head from "next/head";
import Link from "next/link";
import { Flex, Box, Paragraph } from "theme-ui";

export default function Home() {
  return (
    <>
      <Head>
        <title>AWS Playground</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex
        sx={{
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "white",
          flexDirection: "column",
        }}
      >
        <Box sx={{ mt: "40px", width: "100%", textAlign: "center" }}>
          <Paragraph>
            <Link href="/login">Amplify UI</Link>
          </Paragraph>
          <Paragraph sx={{ mt: "20px" }}>
            <Link href="/login-custom">Custom UI</Link>
          </Paragraph>
        </Box>
      </Flex>
    </>
  );
}