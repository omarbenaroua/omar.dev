"use client";
import Image from "next/image";
import Img from "../_assets/images/02.png";
import Title from "../_elements/Title";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const About = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const xTransformimage = useTransform(scrollYProgress, [0, 0.4], ["-200%", "0%"]); 
  const opacityTransform = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <div ref={ref} className="z-10">
      <Title title="About" />
      <section className="relative w-full">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8 border-b-2">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 md:items-center md:gap-12">
            <motion.div
              className="flex justify-center md:justify-end bg-secondary rounded-s-full"
              style={{
                x: xTransformimage, 
                opacity: opacityTransform,
              }}
            >
              <Image
                src={Img}
                alt="Image"
                quality={100}
                className="w-[200px] sm:w-[300px] md:w-[400px] object-contain"
              />
            </motion.div>
            <div className="md:col-span-1 flex justify-center">
              <div className="max-w-lg md:max-w-none">
                <h2 className="text-2xl font-semibold text-secondary sm:text-3xl text-center md:text-start">
                  My Journey into Front-End Development
                </h2>
                <p className="mt-4 text-gray leading-relaxed text-xs md:text-lg">
                  I’m Omar, an aspiring front-end developer with a passion for
                  the digital world and a strong desire to break into the
                  industry. After learning the fundamentals of HTML, CSS, and
                  JavaScript, I’ve dived into modern technologies to create user
                  interfaces that are intuitive and engaging. Over the past few
                  months, I’ve expanded my knowledge by working with React.js,
                  Next.js, and tools like Redux, React Router, TailwindCSS,
                  Bootstrap, Figma, TypeScript, and Sass. I’m excited by how
                  these technologies enable the creation of dynamic, responsive
                  web experiences, and it’s this innovation that drives me to
                  explore new solutions continuously. Although I’m at the
                  beginning of my career, I’m determined to improve constantly,
                  with a curious mindset and an openness to new design and web
                  development trends. I’m eager to collaborate with teams and
                  clients to apply my knowledge, tackle new challenges, and
                  contribute to innovative projects. I believe front-end
                  development is a space full of creativity, and I’m excited to
                  make my way into this field. Working with me means
                  collaborating with someone who is dedicated, passionate, and
                  always ready to learn, with the goal of growing and adding
                  value to every project. I’m ready to step up and contribute to
                  building web experiences that can make a real difference.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
