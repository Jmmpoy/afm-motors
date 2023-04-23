import React from "react";
import Container from "./container";

export default function CarouselText() {
  const lineStyle = "font-futuraLight text-2xl sm:text-3xl ";

  return (
    <Container extraClasses=" About-Container py-16 text-palette-blue relative md:py-24 lg:py-24">
      <ul className=" grid grid-cols-1 gap-y-10 font-thin text-center mx-auto sm:max-w-[80%]">
        <li className={lineStyle}>
          Vous cherchez un{" "}
          <span className="text-palette-orange">garage automobile</span> de
          confiance ? Notre galerie d'images vous montre les raisons pour
          lesquelles{" "}
          <span className="text-palette-orange">
            nous sommes le choix idéal
          </span>{" "}
          pour prendre soin de votre voiture.
        </li>
      </ul>
    </Container>
  );
}
