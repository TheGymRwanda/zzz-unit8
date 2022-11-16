/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react"
import Blog from "../ui/Blog"
import Wrapper from "../wrapper/Wrapper"
import blogData from "/utils/blogData"
import RightArrow from "../vectors/Arrow"


export default function BlogPost() {
    const [blogs , setBlogs] = useState([]);
    const [blogLength , setBlogLength] =  useState(0);
    const [blogCounter , setBlogCounter] =  useState(0);
    const [scrolled , setScrolled] =  useState(false);
    const [scrollPosition , setScrollPosition] = useState(0)
    let mainWrapperRef = useRef();

    

    const fetchBlogs = () => {
        setBlogCounter(blogCounter < blogLength ? (blogCounter + 1)-1  : 0)
        let blogClone = [...blogs];
        blogClone.push(blogs[blogCounter],blogs[blogCounter+1])
        setBlogs(blogClone);
    }

  

    {/* this function is for the scroll similation, once we start integration we can implement it in defferent way so that it adapt the api data */} 
    const triggerScroll = (mainWrapperRef) => {
        mainWrapperRef.current.addEventListener("scroll",(e) => {
            let scrollPosition = e.target.scrollLeft;
            setScrollPosition(scrollPosition);
            let scrollablePx = Math.ceil(mainWrapperRef.current.scrollWidth)-Math.ceil(mainWrapperRef.current.offsetWidth);
            if(scrollPosition >= scrollablePx){ 
                fetchBlogs()
            }
        })
    };

    const scrollBlogForward = () => {
        fetchBlogs();
        mainWrapperRef.current.scroll(scrollPosition+300,0)
    }


    
    const scrollBlogBack = () => {
        console.log(scrollPosition-300)
        if(scrollPosition-300 == 0) {
            setScrolled(false)
        }
        mainWrapperRef.current.scroll(scrollPosition-300 <= 0 ? 0 : scrollPosition-300 , 0)
    }


    useEffect(() => {
      triggerScroll(mainWrapperRef);
    },[triggerScroll]);

    useEffect(() => {
        setBlogs(blogData);
        setBlogLength(blogData.length);
        mainWrapperRef.current.addEventListener("scroll",(e) => {
           if(e.target.scrollLeft > 200) {
                setScrolled(true)
           }
        })
    },[]);

   
    return(
        <div className="mb-32 mx-auto relative">
            <Wrapper>
                <div className="flex items-center mb-5 gap-4">
                    <h3 className="relative text-muted-300 font-grotesk  font-normal leading-8 text-xl ">
                        Blog
                    </h3>
                    <div className="hidden xl:flex relative gap-2 items-center self-center mt-2">
                        <div className="rotate-180 cursor-pointer" onClick={scrollBlogBack}>
                            <RightArrow stroke={ !scrolled ? "#9A9A9A" :  ""} />
                        </div>
                        <div className="cursor-pointer" onClick={scrollBlogForward}>
                            <RightArrow />
                        </div>
                    </div>
                </div>
            </Wrapper>
            <div ref={mainWrapperRef} className="px-5 mx-auto lg:px-16 md:px-9 flex max-w-full overflow-x-auto gap-6 p-6 hide-scroll">
                {
                    blogs.map((value, index) => {
                        let {date , title , description, tags} = value;
                        return(
                            <Blog key={index} date={date} title={title} description={description}>
                                {
                                    tags.map((value,index) => (
                                        <div key={index} className="bg-muted-50 rounded-2.3xl px-2.5 py-01">
                                            <p className="text-muted-200 text-lg font-normal">
                                                {value}
                                            </p>                                        
                                        </div>
                                    ))
                                }
                            </Blog>
                        )
                    })
                }            
            </div>
        </div>
    )
}

