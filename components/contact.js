import React from "react";
import Container from "./container";

const items= [
  {
    title: "Adresse",
    text: "Route des Poids-Lourds Kingabwa, Limete",
    subtext: "Kinshasa RDC"
  },
  {
    title: "Téléphone",
    text: "+243 990 288 880"
  },
  {
    title: "Réseaux sociaux",
    iconUrl: "/assets/icons/facebook_logo_icon.svg"
  }
]

export default function Contact() {

  return (
    <Container extraClasses="Contact-Container py-16 md:py-32 lg:py-48 bg-white">
      <h4 className="font-futuraLight font-normal text-palette-blue text-2xl underline underline-offset-8 mb-20 md:-mt-20">Contact</h4>
      <div
        className="contact   grid grid-cols-1 gap-20  md:grid-cols-2 lg:grid-cols-3 grid-rows-2"
        aria-labelledby="footer-heading">
        <div className="grid grid-cols-1 row-span-2 gap-20  md:grid-cols-2  col-span-2  md:mt-0 sm:gap-y-14">
          {items.map(({title, text, subtext, iconUrl}, i) =>
          <div key={i} className="w-full xsl:w-6/12 text-palette-blue">
            <h4 className="text-2xl text-palette-orange uppercase">{title}</h4>
            {text && <p className="mt-1  xl:text-2xl">{text}</p>}
            {subtext && <p className="xl:text-2xl">{subtext}</p>}
            {iconUrl && <a href="#" className=""><img src={iconUrl} alt="facebook icon logo" className="w-10" /></a>}
          </div>
          )}
        </div>
      </div>
    </Container>
  );
}
