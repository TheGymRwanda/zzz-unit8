export  default function triggerScroll(mainWrapperRef,setScrollPosition,fetchBlogs) {
    mainWrapperRef.current.addEventListener("scroll", (e) => {
      let scrollPosition = e.target.scrollLeft;
      setScrollPosition(scrollPosition);
      let scrollablePx =
        Math.ceil(mainWrapperRef.current.scrollWidth) -
        Math.ceil(mainWrapperRef.current.offsetWidth);
      if (scrollPosition >= scrollablePx) {
        fetchBlogs();
      }
    });
  };