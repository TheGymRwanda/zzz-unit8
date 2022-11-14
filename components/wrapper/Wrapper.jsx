import React from 'react';

export default function Wrapper({ styles, children }) {
  return (
    <section className={`md:max-w-6.5xl  max-w-19 mx-auto ${styles}`}>
      {children}
    </section>
  );
}
