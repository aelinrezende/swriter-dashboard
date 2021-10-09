import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { MainSideBar } from "../components/common/SideBar";
import { routes } from "../router";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <MainSideBar routes={routes}>
        <Component {...pageProps} />
      </MainSideBar>
    </ChakraProvider>
  );
}
export default MyApp;
