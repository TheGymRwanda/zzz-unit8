import { useEffect, useState } from "react"
import Blog from "../ui/Blog"
import Wrapper from "../wrapper/Wrapper"
import blogData from "/utils/blogData"

export default function BlogPost() {
    const [blogs , setBlogs] = useState([])

    useEffect(() => {
        setBlogs(blogData)
    },[])
    return(
        <div className="mb-32 mx-auto">
            <Wrapper>
                <h3 className="text-muted-300 font-grotesk font-normal leading-8 text-xl mb-5">
                    Blog
                </h3>
            </Wrapper>
            <div className="flex max-w-full overflow-x-auto gap-6 p-6 hide-scroll">
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