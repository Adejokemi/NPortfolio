import Image from "next/image";
import Button from "./Button";
import Bio from "./Bio";
import ks from "../assests/ks.png";

const Hero = () => {
  return (
    <>
      <div className="relative">
        <Image
          src={ks}
          alt="cover"
          className="w-full h-48 lg:h-64 object-cover"
        />
      </div>
      <div className="flex justify-between items-start mx-5 lg:mx-0">
        <div className="transform -translate-y-1/2 lg:translate-x-2/4 lg:w-36 lg:h-36 w-28 h-28 overflow-hidden rounded-full border-4 border-blue-100 relative">
          <Image
            src={"https://i.imgur.com/OwVIu9P.jpg"}
            alt="Profile"
            width={140}
            height={140}
            className="w-full h-full object-fit"
          />
        </div>
        <a
          href="https://drive.google.com/file/d/1bqWJaQ20rlClwlGFUJbW2g-S5OdV_-hu/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            text="Download CV"
            variant="primary"
            className={"lg:mt-4 lg:mr-6 mt-2"}
          />
        </a>
      </div>
      <div className="mt-[-50px] z-10 mx-5 lg:mx-0">
        <Bio />
      </div>
    </>
  );
};

export default Hero;
