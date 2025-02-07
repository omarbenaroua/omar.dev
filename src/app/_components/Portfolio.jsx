import Data from "../_data/PortfolioData";
import PortfolioBox from "../_elements/PortfolioBox";
import Title from "../_elements/Title";

const Portfolio = () => {
  return (
    <div>
      <div>
        <Title title="Portfolio" />
        <div className="grid grid-cols-2 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 m-4 sm:m-6 md:m-32">
          {Data.map((data) => {
            return (
                <PortfolioBox
                key={data.id}
                image={data.image}
                title={data.title}
                text={data.text}
                year={data.year}
                skills={data.skills}
                href={data.href}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
