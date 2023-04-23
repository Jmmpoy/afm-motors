import React, { Dispatch, SetStateAction, useState } from "react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { fade } from "@/helpers/transitions";



const navItemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
};

export default function Navigation({ items }) {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <motion.nav className="hidden md:flex justify-end items-center  w-full  md:w-auto">
      <motion.ul
        initial={{opacity:0}}
        animate={{opacity:1,transition:{duration:.4,delay:1.7}}}
        onHoverEnd={() => setActiveIndex(null)}
        className="flex space-x-3 font-neueLight"
      >
        {items.map(({ route, url }, index) => {
          const isActive = index === activeIndex;
          return (
            <motion.li
              key={index}
              onHoverStart={() => setActiveIndex(index)}
              variants={navItemVariants}
              initial="hidden"
              animate="visible"
            >
              <Link legacyBehavior href={url}>
                <a className="relative hover:text-gray-500 focus:text-gray-500 text-lg">
                  {isActive && (
                    <motion.span
                      layoutId="shadow"
                      className="shadow"
                      initial={{ opacity: 0}}
                      animate={{ opacity: 1 }}
                      transition={{
                        type: "spring",
                        duration: 0.5,
                      }}
                    />
                  )}
                  <span>{route}</span>
                </a>
              </Link>
            </motion.li>
          );
        })}
      </motion.ul>
    </motion.nav>
  );
}
