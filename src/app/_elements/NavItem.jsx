"use client";
import React from "react";
import { motion } from "framer-motion";

const NavItem = (props) => {
  return (
    <div>
      <motion.div
        whileHover={{
          scale: [null, 1.0, 1.3],
          transition: {
            duration: 0.5,
            ease: ["easeInOut", "easeOut"],
          },
        }}
        transition={{
          duration: 0.3,
          ease: "easeOut",
        }}
      >
        <a
          className="text-gray md:text-gray hover:text-secondary text-lg  transition"
          href={props.href}
        >
          {props.title}
        </a>
      </motion.div>
    </div>
  );
};

export default NavItem;
