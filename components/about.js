import React from "react";
import Container from "./container";

export default function About() {
  const lineStyle = "font-futuraLight text-2xl sm:text-3xl ";

  return (
    <Container extraClasses=" About-Container py-16 text-palette-blue relative md:py-24 lg:py-24">
      <ul className=" grid grid-cols-1 gap-y-10 font-thin text-center mx-auto sm:max-w-[80%] bg-[url('/assets/icons/speedometer_icon.svg')] bg-center bg-no-repeat bg-contain">
        <li className={lineStyle}>
          Chez <span className="text-palette-orange">AFM Motors</span>, nous
          sommes passionnés par les voitures et nous sommes fiers de fournir des
          services de réparation automobile professionnels et fiables à nos
          clients. Nous sommes une entreprise familiale avec une longue histoire
          de service à la communauté locale.
        </li>
        <li className={lineStyle}>
          Nous avons une équipe de{" "}
          <span className="text-palette-orange">mécaniciens qualifiés</span> et
          expérimentés qui peuvent prendre en charge tous les types de
          réparations et d'entretiens automobiles, des petites réparations aux
          révisions complètes.
        </li>
        <li className={lineStyle}>
          Nous nous engageons à offrir un{" "}
          <span className="text-palette-orange">service de qualité</span>{" "}
          supérieure à des prix abordables pour satisfaire les besoins de nos
          clients. Contactez-nous dès maintenant pour discuter de vos besoins
          automobiles et découvrir comment nous pouvons vous aider à prendre
          soin de votre voiture.
        </li>
      </ul>
    </Container>
  );
}
