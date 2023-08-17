import { Fragment } from "react";
import Carousel from "./Carousel/Carousel";

import projects_border_top from "../../assets/images/project-border-top.png";
import projects_border_bottom from "../../assets/images/project-border-bottom.png";

const Projects = () => {
  return (
    <Fragment>
      <div className="container mx-auto">
        <img src={projects_border_top} className="m-auto pb-10" alt="" />
        <h1 className="text-white uppercase text-[45px] text-center">
          projects
        </h1>
        <div className="mt-20">
          <Carousel />
        </div>
        <img src={projects_border_bottom} className="m-auto pt-10" alt="" />
      </div>
    </Fragment>
  );
};

export default Projects;
