import React from "react"
function Blog({date, title,description ,children}) {
    return(
        <div className=" flex-grow-0 min-w-48 p-4 lg:p-5 drop-shadow-custom-sm- border border-muted-400 rounded-xl flex flex-col">
            <h4 className="mb-6 text-muted-200 text-lg">
                {date}
            </h4>
            <div className="flex flex-col gap-3 flex-grow">
                <h2 className="text-2.9xl font-grotesk font-normal -tracking-xs leading-8.3">
                    {title}
                </h2>
                <p className="text-xl leading-7 flex-grow -tracking-xsm max-h-41 overflow-hidden text-ellipsis pb-2">
                    {description}
                </p>
                <div className="flex gap-x-3 gap-y-2 flex-wrap">
                    { children}
                </div>
            </div>
        </div>
    )
}

export default Blog;
