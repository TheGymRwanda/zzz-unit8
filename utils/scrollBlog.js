export const scrollBlogForward = (ref,scrollPosition) => {
    ref.current.scroll(scrollPosition + 1000, 0);
};

export const scrollBlogBack = (ref,scrollPosition) => {
    ref.current.scroll(
        scrollPosition - 1000 <= 0 ? 0 : scrollPosition - 1000,
        0
    );
};