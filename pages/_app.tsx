import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Container from "@/components/Container";
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Container>
        <Component {...pageProps} />
      </Container>
    </ThemeProvider>
  );
}
