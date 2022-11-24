/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import Layout from "../../layout/Layout";
import blogData from "/utils/blogData";
import RightArrow from "../../vectors/Arrow";
import RanderPost from "./RanderPosts"

export default function Posts() {
  const [blogs, setBlogs] = useState([]);
  const [blogLength, setBlogLength] = useState(0);
  const [blogCounter, setBlogCounter] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const mainWrapperRef = useRef();

  const fetchBlogs = () => {
    setBlogCounter(blogCounter < blogLength ? blogCounter + 1 - 1 : 0);
    let blogClone = [...blogs];
    blogClone.push(blogs[blogCounter], blogs[blogCounter + 1]);
    setBlogs(blogClone);
  };

  const triggerScroll = (mainWrapperRef) => {
    mainWrapperRef.current.addEventListener("scroll", (e) => {
      let scrollPosition = e.target.scrollLeft;
      setScrollPosition(scrollPosition);
      let scrollablePx = Math.ceil(mainWrapperRef.current.scrollWidth) - Math.ceil(mainWrapperRef.current.offsetWidth);
      if (scrollPosition >= scrollablePx) {
        fetchBlogs();
      }
    });
  };

  const scrollBlogForward = () => {
    fetchBlogs();
    mainWrapperRef.current.scroll(scrollPosition + 1000, 0);
  };

  const scrollBlogBack = () => {
    mainWrapperRef.current.scroll(
      scrollPosition - 1000 <= 0 ? 0 : scrollPosition - 1000,
      0
    );
  };

  useEffect(() => {
    triggerScroll(mainWrapperRef);
  }, [triggerScroll]);

  useEffect(() => {
    setBlogs(blogData);
    setBlogLength(blogData.length);
    mainWrapperRef.current.addEventListener("scroll", (e) => {
      e.target.scrollLeft > 200 ?  setScrolled(true) :  setScrolled(false);
    });
  }, []);

  return (
    <div className="relative mx-auto xl:mb-25 md:mb-25.1 mb-34.7">
      <Layout>
        <div className="flex items-center gap-4 mb-5">
          <h3 className="relative text-xl font-normal leading-8 text-muted-300 font-grotesk ">
            Blog
          </h3>
          <div className="relative items-center self-center hidden gap-2 mt-2 xl:flex">
            <div className="rotate-180 cursor-pointer" onClick={scrollBlogBack}>
              <RightArrow stroke={!scrolled ? "#9A9A9A" : ""} />
            </div>
            <div className="cursor-pointer" onClick={scrollBlogForward}>
              <RightArrow />
            </div>
          </div>
        </div>
      </Layout>
      <div
        ref={mainWrapperRef}
        className="relative flex max-w-full gap-6 p-6 px-5 overflow-x-auto lg:px-16 md:px-9 hide-scroll"
      >
        <RanderPost blogs={blogs} />
      </div>
    </div>
  );
}
