import Image from "next/image";

const SkillsBox = (props) => {
  return (
    <>
    <div key={props.id}  className="bg-primary p-2 sm:p-4 border-y-2 rounded-3xl transition-transform shadow-lg shadow-secondary hover:border-4 hover:scale-105  hover:shadow-2xl hover:shadow-secondary">
      <div className="relative block rounded-tr-2xl">
        <Image
          src={props.image}
          alt="Skills Logo"
          className=" rounded-xl"
        />
        <div className="text-center">
          <h1 className="pb-2 text-sm sm:text-lg md:text-xl font-bold">
            {props.title}
          </h1>
          <div className="grid grid-cols-3 gap-2 justify-center">
            {props.skills.map((data) => {
              return (
                <div
                  key={data.id}
                  className="flex flex-col items-center p-1 md:p-2 rounded-lg shadow-sm bg-primary hover:bg-secondary hover:text-primary transition-colors"
                >
                  <Image
                    src={data.img} 
                    alt="Skill Logo"

                    className="w-4 h-4 sm:w-10 sm:h-10 mb-1"
                  />
                  <p className="text-[8px] sm:text-sm font-medium text-gray-700">
                    {data.skill}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default SkillsBox;



