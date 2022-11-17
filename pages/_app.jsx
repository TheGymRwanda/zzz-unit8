import Script from "next/script";
import Wrapper from "../components/wrapper/Wrapper";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Wrapper>
      <Component {...pageProps} />
    </Wrapper>
  );
}

export default MyApp;
