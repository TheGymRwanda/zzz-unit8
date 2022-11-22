export default function Layout({ styles, children }) {
    return (
        <section
            className={`px-5 mx-auto md:px-9 xl:px-16  xl:max-w-8xl ${
                styles ? styles : " "
            }`}
        >
            {children}
        </section>
    );
}
