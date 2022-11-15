import React from "react";

export default function Wrapper({ styles, children }) {
  return (
    <section className={`px-5 lg:px-16 md:px-9 mx-auto xl:max-w-8xl ${styles}`}>
      {children}
    </section>
  );
}
