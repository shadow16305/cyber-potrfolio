import React, { Fragment, useState } from "react";

import navBtn from "../../../assets/icons/navBtn.svg";
import CarouselItem from "./CarouselItem";

import project_desktop_one from "../../../assets/images/blogr.png";
import project_desktop_two from "../../../assets/images/sunnyside.png";
import project_desktop_three from "../../../assets/images/space-tourism-website.png";
import project_desktop_four from "../../../assets/images/art-gallery-website.png";
import project_desktop_five from "../../../assets/images/easybank.png";
import project_desktop_six from "../../../assets/images/planets-fact-site.png";

const DesktopSlider = () => {
  const content = [
    {
      id: "d1",
      title: "BLOGR LANDING PAGE",
      text: "HTML/CSS/BOOTSTRAP",
      image: project_desktop_one,
    },
    {
      id: "d2",
      title: "SUNNYSIDE LANDING PAGE",
      text: "HTML/CSS/BOOTSTRAP",
      image: project_desktop_two,
    },
    {
      id: "d3",
      title: "SPACE TOURISM WEBSITE",
      text: "HTML/CSS/BOOTSTRAP/JS",
      image: project_desktop_three,
    },
    {
      id: "d4",
      title: "ART GALLERY WEBSITE",
      text: "HTML/CSS/BOOTSTRAP",
      image: project_desktop_four,
    },
    {
      id: "d5",
      title: "EASYBANK LANDING PAGE",
      text: "HTML/CSS/BOOTSTRAP",
      image: project_desktop_five,
    },
    {
      id: "d6",
      title: "PLANETS FACT SITE",
      text: "HTML/CSS/BOOTSTRAP/JS",
      image: project_desktop_six,
    },
  ];

  const [left, setLeft] = useState(0);

  const handlePrevClick = () => {
    let newLeft = +left - 2640 / 6;
    if (newLeft < 0) {
      newLeft = 1320;
      setLeft(newLeft);
    } else {
      setLeft(newLeft);
    }
  };

  const handleNextClick = () => {
    let newLeft = +left + 2640 / 6;
    if (newLeft >= 1760) {
      newLeft = 0;
      setLeft(newLeft);
    } else {
      setLeft(newLeft);
    }
  };

  return (
    <Fragment>
      <div className="w-[440px] lg:w-[1320px] h-[350px] relative overflow-hidden m-auto">
        <div
          className={`flex w-[2640px] absolute text-white text-center`}
          style={{ left: `-${left}px`, transition: "250ms" }}
        >
          {content.map((item) => (
            <CarouselItem value={item} key={item.id} />
          ))}
        </div>
      </div>
      <div className="flex justify-center gap-10 mt-11">
        <button>
          <img src={navBtn} alt="" onClick={handlePrevClick} />
        </button>
        <button>
          <img
            src={navBtn}
            className="scale-x-[-1]"
            alt=""
            onClick={handleNextClick}
          />
        </button>
      </div>
    </Fragment>
  );
};

export default DesktopSlider;
