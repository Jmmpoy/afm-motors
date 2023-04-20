import React from "react";
import { m } from "framer-motion";
import Container from "./container";
import { fade } from "../helpers/transitions";
import Image from 'next/image'
import heroImage from '../public/images/hero-image.webp';

export default function Hero() {
  return (


    <div className="relative h-screen">

      <Container extraClasses="Hero-Container relative z-[14]">

        <m.main className="hero translate-y-[-50px] h-screen sm:h-screen flex flex-col justify-center  ">
          <m.div
            className=" relative"
            variants={fade}
            initial="initial"
            animate="enter"
            exit="exit"
          >
            <div className=" hero-container text-left  w-12/12 ">
              <h1 className="text-2xl  sm:text-6xl">
                Des services de qualité <span className="block">supérieure pour votre voiture</span>
              </h1>
              <div>
                <p className=" font-sans  text-gray-900  mt-8 mb-6 w-12/12 text-base sm:max-w-screen-sm sm:text-2xl    md:leading-normal   lg:text-3xl lg:max-w-screen-md xl:text-3xl ">
                  Chez <span className="text-palette-orange">AFM Motors</span>, nous sommes fiers de fournir des services de réparation automobile professionnels et fiables à nos clients, des petites réparations aux révisions complètes, grâce à une équipe de mécaniciens qualifiés et expérimentés.
                </p>
              </div>
            </div>
            <button type="button" className=" z-10 absolute cursor-pointer  w-40  text-opacity-100 bg-palette-orange font-medium rounded-lg text-lg px-5 py-2.5 mr-2 mb-2  hover:bg-palette-lightOrange transition duration-300 ease-in-out">Prenez Contact</button>
          </m.div>
        </m.main>
      </Container>
      <Image alt="heroImage"
        src={heroImage}
        placeholder="blur"
        priority
        quality={100} layout="fill" objectFit="cover" className="opacity-25" />
    </div>

  );
}
