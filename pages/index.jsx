import Head from "next/head";
import Expertise from "../components/Sections/Expertise";
import Header from "../components/sections/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Unit 8</title>
      </Head>
      <Header />
      <Expertise />
    </>
  );
}