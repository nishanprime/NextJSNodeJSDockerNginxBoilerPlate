import "@/styles/globals.css";
import React from "react";
import type { AppProps } from "next/app";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { DemoProvider } from "@/contexts";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <DemoProvider>
      <ChakraProvider theme={theme} cssVarsRoot="body">
        <Component {...pageProps} />
      </ChakraProvider>
    </DemoProvider>
  );
}
