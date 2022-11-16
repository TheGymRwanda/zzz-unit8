import Head from "next/head";
import AboutUs from "../components/sections/AboutUs";
import BlogPost from "../components/sections/BlogPost";
import Expertise from "../components/sections/Expertise";
import Header from "../components/sections/Header";
import Project from "../components/sections/Project";
import Wrapper from "../components/wrapper/Wrapper";

export default function Home() {
  return (
    <>
      <Head>
        <title>Unit 8</title>
      </Head>
      <Wrapper>
        <Header />
        <Project />
        <Expertise />
        <AboutUs/>
      </Wrapper>
      <BlogPost />
    </>
  );
}
