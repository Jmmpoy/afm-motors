import React from "react";
import Container from "./container";

const items = [
  {
    title: "Adresse",
    text: "Route des Poids-Lourds Kingabwa, Limete",
    subtext: "Kinshasa RDC",
  },
  {
    title: "Téléphone",
    text: "+243 990 288 880",
  },
  {
    title: "Réseaux sociaux",
    iconUrl: "/assets/icons/facebook_logo_icon.svg",
  },
];

export default function Contact() {
  return (
    <Container extraClasses="rounded-t-[2rem] bg-palette-blue py-16 md:py-32 bg-white">
      <div
        className="contact   grid grid-cols-1 gap-20  md:grid-cols-2 lg:grid-cols-3 grid-rows-2"
        aria-labelledby="footer-heading"
      >
        <div className="grid grid-cols-1 row-span-2 gap-20  md:grid-cols-2  col-span-2  md:mt-0 sm:gap-y-14">
          {items.map(({ title, text, subtext, iconUrl }, i) => (
            <div key={i} className="w-full xsl:w-6/12 text-white">
              <h4 className="text-2xl text-palette-orange uppercase">
                {title}
              </h4>
              {text && <p className="mt-1  xl:text-2xl">{text}</p>}
              {subtext && <p className="xl:text-2xl">{subtext}</p>}
              {iconUrl && (
                <a href="#" className="">
                  <img
                    src={iconUrl}
                    alt="facebook icon logo"
                    className="w-10"
                  />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
