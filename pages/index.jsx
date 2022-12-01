import Head from "next/head";
import AboutUs from "../components/sections/AboutUs";
import Posts from "../components/sections/blogs/Posts";
import Expertise from "../components/sections/Expertise";
import Footer from "../components/sections/Footer";
import Gallery from "../components/sections/Gallery";
import Header from "../components/sections/Header";
import Project from "../components/sections/Project";
import Layout from "../components/layout/Layout";

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
            <Layout>
                <Header />
                <Project />
                <Expertise />
                <AboutUs />
            </Layout>
            <div className="1.5xl:px-12.2">
                <Gallery />
            </div>
            <Posts />
            <Layout>
                <Footer />
            </Layout>
        </>
    );
}
