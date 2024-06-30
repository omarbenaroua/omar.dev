import "./Skills.css";
import { Title, SkillsCard } from "../../components/index";
import skillsInfo from "../../Data/SkillsData";
import { useRef } from "react";

const Skills = () => {
  const ref = useRef(null)
  const scroll = () => {
    ref.current.scrollIntoView({behavior: "smooth",block: "start", inline: "nearest"});
  }

  const Cards = skillsInfo.map((info) => {
    return (
        <SkillsCard
          key={info.id}
          id={info.id}
          title={info.title}
          img={info.img}
          skills={info.skills.map((skl) => {
            return (
              <>
                <p>
                  <img src={skl.img} alt={skl.skill} />
                  {skl.skill}
                </p>
              </>
            );
          })}
        />
    );
  });
  return (
    <>
      <Title onClick={scroll}>SKILLS</Title>
      <div className="skills" ref={ref}>
        <div className="card-group">{Cards}</div>
      </div>
    </>
  );
};



export default Skills;
