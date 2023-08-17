import { Fragment } from "react";
import { iconsDesktop, iconsMobile } from "./icons";
import classes from "./Skills.module.css";

const Skills = () => {
  return (
    <Fragment>
      <div
        className={`${classes.skillsBg} flex flex-col items-center lg:justify-center lg:h-[470px] p-10 lg:p-0`}
      >
        <h1 className="text-center text-white text-[45px] uppercase">
          Skills and tools
        </h1>
        <div className="flex lg:flex-row flex-wrap justify-between gap-[36px] lg:gap-[80px] max-w-[390px] lg:max-w-[1200px] mt-20">
          {iconsDesktop.map((elem) => (
            <img src={elem} alt="" key={elem} className="hidden md:block" />
          ))}
          {iconsMobile.map((elem) => (
            <img src={elem} alt="" key={elem} className="md:hidden" />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Skills;
