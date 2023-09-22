import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeUIProvider } from "theme-ui";
import theme from "../lib/theme";
import { Amplify } from "aws-amplify";
import awsExports from "../../aws-exports";

Amplify.configure({
  Auth: {
    region: awsExports.REGION,
    userPoolId: awsExports.USER_POOL_ID,
    userPoolWebClientId: awsExports.USER_POOL_APP_CLIENT_ID,
  },
  ssr: true,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeUIProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeUIProvider>
  );
}
