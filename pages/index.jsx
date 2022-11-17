import Head from "next/head";
import AboutUs from "../components/sections/AboutUs";
import BlogPost from "../components/sections/BlogPost";
import Expertise from "../components/sections/Expertise";
import Footer from "../components/sections/Footer";
<<<<<<< HEAD
import Gallery from "../components/sections/Gallery";
=======
import GallerySimulation from "../components/sections/GallerySimulation";
>>>>>>> e052a8d (refactor: convert images to webp)
import Header from "../components/sections/Header";
import Project from "../components/sections/Project";
import Wrapper from "../components/wrapper/Wrapper";

export default function Home() {
  return (
    <>
      <Head>
        <title>Unit 8</title>
        <link
          data-n-head="ssr"
          rel="icon"
          type="image/svg+xml"
          href="/favicon.svg"
          sizes="any"
        />
      </Head>
      <Wrapper>
        <Header />
        <Project />
        <Expertise />
        <AboutUs />
<<<<<<< HEAD
        <Gallery />
=======
        <GallerySimulation />
>>>>>>> e052a8d (refactor: convert images to webp)
      </Wrapper>
      <BlogPost />
      <Wrapper>
        <Footer />
      </Wrapper>
    </>
  );
}
