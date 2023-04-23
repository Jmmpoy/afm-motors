import React from "react";
import { slideInLeft, stagger } from "../../helpers/transitions";
import { motion } from "framer-motion";




export default function Menu({ open, items }) {
  const asideVariants = {
    open: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.9,
        ease: [0.79, 0.14, 0.15, 0.86],
      },
    },
    closed: {
      x: "-100%",
      opacity: 0,
      transition: {
        duration: 0.9,
        ease: [0.79, 0.14, 0.15, 0.86],
        when: "afterChildren",
      },
    },
  };
  return (
    <motion.aside
      variants={asideVariants}
      initial="closed"
      animate={open && "open"}
      exit="closed"
      className="bg-palette-blue  text-white fixed left-0 top-0 w-full h-screen font-sans px-10 md:hidden pt-20">
      <motion.ul
        variants={stagger}
        className="flex flex-col justify-center h-5/6 overflow-hidden ">
        {items && items.map(({ route, url }, index) => {
          return (
            <motion.li
              key={index}
              variants={slideInLeft}
              className="menu-overlay-item text-white text-6xl  md:text-7xl pt-10 hover:text-palette-orange  ">
              {route}
            </motion.li>
          );
        })}
      </motion.ul>
    </motion.aside>
  );
}
