export default function Wrapper({ styles, children }) {
  return (
    <section className={`px-5 mx-auto lg:px-16 md:px-9 xl:max-w-8xl ${styles}`}>
      {children}
    </section>
  );
}
