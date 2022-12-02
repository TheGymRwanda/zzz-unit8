import Script from "next/script";
import Layout from "../components/layout/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (

     <Component {...pageProps} />
 
  );
}

export default MyApp;


