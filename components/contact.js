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
    icons: [{
        icon : "/assets/icons/facebook_logo_icon.svg", 
        socialMediaUrl: "https://www.facebook.com/"
      }, 
      {
        icon: "/assets/icons/instagram_logo_icon.svg",
        socialMediaUrl: "https://www.instagram.com/afm.cd/"
      }],
  },
];

export default function Contact() {
  return (
    <Container extraClasses="rounded-t-[2rem] bg-palette-blue py-16 md:py-32">
      <div
        className="contact "
        aria-labelledby="footer-heading"
      >
        <div className="grid grid-cols-1 row-span-2 gap-20  md:grid-cols-3  col-span-2  md:mt-0 sm:gap-y-14 w-full">
          {items.map(({ title, text, subtext, icons }, i) => (
            <div key={i} className="w-full xsl:w-6/12 text-white flex flex-col items-center">
              <h4 className="text-2xl text-palette-orange  text-center mb-3">
                {title}
              </h4>
              {text && <p className="mt-1  xl:text-2xl text-center">{text}</p>}
              {subtext && <p className="xl:text-2xl  text-center">{subtext}</p>}
              {icons && <div className="grid grid-cols-2 gap-x-4 justify-between">{icons.map(({icon, socialMediaUrl}) => (
                <a href={socialMediaUrl} className="text-center">
                  <img
                    src={icon}
                    alt={`${icon} icon logo`}
                    className="w-8"
                  />
                </a>
              ))}</div>}
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
