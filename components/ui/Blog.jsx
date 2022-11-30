function Blog({ date, title, description, children }) {
    return (
        <div className="flex flex-col flex-grow-0 p-4 border  min-w-xs md:min-w-sm md:max-w-sm min-h-90 md:p-5 lg:p-5 shadow-custom-sm border-muted-400 rounded-xl">
            <h4 className="mb-6 text-lg text-muted-200">{date}</h4>
            <div className="flex flex-col flex-grow gap-3">
                <h2 className="text-2.9xl font-grotesk font-normal -tracking-xs leading-8.3">
                    {title}
                </h2>
                <p className="flex-grow pb-2 overflow-hidden text-xl leading-7 -tracking-xsm max-h-41 text-ellipsis">
                    {description}
                </p>
                <div className="flex flex-wrap gap-x-3 gap-y-2">{children}</div>
            </div>
        </div>
    );
}

export default Blog;
