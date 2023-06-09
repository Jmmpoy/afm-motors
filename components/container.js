import React from "react";


export default function Container({ children, extraClasses }) {
  return (
    <section
      className={`${extraClasses} px-2 xsm:px-6 max-w-screen-3xl mx-auto w-full md:px-8`}>
      {children}
    </section>
  );
}
