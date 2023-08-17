import { Fragment } from "react";
import classes from "../UI/ButtonPrimary.module.css";
import "./Header.css";

const Banner = () => {
  return (
    <Fragment>
      <div className="container lg:max-w-[1380px] m-auto">
        <div className="flex flex-col justify-center md:items-center lg:items-start">
          <h1 className="text-white text-[44px] min-w-[300px] leading-[50px] md:text-6xl lg:text-[88px] lg:max-w-[1050px] text-center lg:text-start uppercase relative">
            Hi, I’m Chris. A{" "}
            <span className="text-[#ff0054] px-3">Full-Stack Developer</span>{" "}
            specializing in building accessible websites and applications.
          </h1>
          <div className="mt-20 md:mt-12 lg:mt-20 flex justify-center lg:justify-start">
            <button className={classes.cybrBtn}>
              <span aria-hidden className={classes.cybrBtn__glitch}></span>
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Banner;
