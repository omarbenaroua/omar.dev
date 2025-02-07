"use client";
import SkillsData from "../_data/SkillsData";
import ServicesData from "../_data/ServicesData";
import StatsBox from "../_elements/StatsBox";
import { useRef, useEffect, useState } from "react";
import { useScroll, animate } from "framer-motion";

const Stats = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0.7 1", "1 1"],
  });

  const totalSkills = SkillsData.reduce((total, category) => {
    return total + category.skills.length;
  }, 0);
  const totalServices = ServicesData.length;

  // Stati per i valori animati
  const [skillsValue, setSkillsValue] = useState(0);
  const [programmingYears, setProgrammingYears] = useState(0);
  const [servicesValue, setServicesValue] = useState(0);

  useEffect(() => {
    const unsubScroll = scrollYProgress.onChange((latest) => {
      if (latest > 0.7) {
        const skillsAnimation = animate(0, totalSkills, {
          duration: 1,
          onUpdate: (latest) => setSkillsValue(Math.round(latest)),
        });

        const programmingAnimation = animate(0, 2, {
          duration: 1,
          onUpdate: (latest) => setProgrammingYears(Math.round(latest)),
        });

        const servicesAnimation = animate(0, totalServices, {
          duration: 1,
          onUpdate: (latest) => setServicesValue(Math.round(latest)),
        });

        return () => {
          skillsAnimation.stop();
          programmingAnimation.stop();
          servicesAnimation.stop();
        };
      }
    });

    return () => unsubScroll();
  }, [scrollYProgress, totalSkills, totalServices]);

  return (
    <div ref={ref}>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            My Skills in Numbers
          </h2>

          <p className="mt-4 text-gray text-xs sm:text-xl">
            With {skillsValue} skills, {programmingYears} years of self-taught
            programming, and expertise in front-end and UI/UX design, I deliver
            innovative and high-quality solutions. Passion and experience drive
            every project.
          </p>
        </div>

        <dl className="mt-6 grid grid-cols-1 gap-2 sm:gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-3">
          <StatsBox title="Total Skills" text={skillsValue} href="/skills" />
          <StatsBox
            title="Self-taught programming"
            text={`${programmingYears} Years`}
          />
          <StatsBox title="Services" text={servicesValue} href="/about" />
        </dl>
      </div>
    </div>
  );
};

export default Stats;
