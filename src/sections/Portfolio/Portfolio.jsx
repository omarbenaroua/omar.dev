import "./Portfolio.css";
import portfolioInfo from "../../Data/PortfolioData";
import { Title, PortfolioCard } from "../../components/index";
import { useRef } from "react";

const Projects = () => {
  const ref = useRef(null)
  const scroll = () => {
    ref.current.scrollIntoView({behavior: "smooth",block: "center", inline: "nearest"});
  }
  const Cards = portfolioInfo.map((card) => {
    return (
      <PortfolioCard
        key={card.id}
        image={card.image}
        icon={card.icon}
        title={card.title}
        text={card.text}
        year={card.year}
        site={card.site}
        notice={card.notice}
        skills={card.skills.map((skl) => {
          return (
            <>
                <img src={skl.img} alt={skl.skill} />
            </>
          );
        })}
      />
    );
  });
  return (
    <>
      <Title onClick={scroll}>Portfolio</Title>
      <div className="box row row-cols-1 row-cols-md-2" ref={ref}>
        {Cards}
      </div>
    </>
  );
};

export default Projects;
