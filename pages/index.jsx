import Head from "next/head";
import AboutUs from "../components/sections/AboutUs";
import Expertise from "../components/Sections/Expertise";
import Header from "../components/sections/Header";
import Project from "../components/sections/Project";

export default function Home() {
  return (
    <>
      <Head>
        <title>Unit 8</title>
      </Head>
      <Header />
      <Project />
      <Expertise />
      <AboutUs/>
    </>
  );
}
