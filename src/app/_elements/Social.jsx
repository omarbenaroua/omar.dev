import SocialData from "../_data/SocialData";
import Image from "next/image";

const Social = () => {
  return (
    <div className="my-4">
      {SocialData.map((data) => {
        return (
          <a
            href={data.href}
            target="_blank"
            className="pr-5 inline-block transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            key={data.id}
          >
            <Image
              src={data.image}
              alt=""
              width={100}
              height={100}
              className=" w-8 md:w-12"
            />
          </a>
        );
      })}
    </div>
  );
};

export default Social;
