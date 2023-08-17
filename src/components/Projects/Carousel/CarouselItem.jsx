import React from "react";

const CarouselItem = ({ value }) => {
  const item = value;

  return (
    <div>
      <div className="relative img_container">
        <div className="img-Hover__btn lg:absolute hidden lg:w-[100%] lg:h-[100%] lg:flex lg:flex-col lg:justify-center gap-8 lg:items-center left-0 top-0 transition-[250ms]">
          <a href="#">View Site</a>
          <a href="#">View Code</a>
        </div>
        <img src={item.image} className="px-[8px]" alt="current image" />
      </div>
      <h2 className="mt-5 lg:mt-3 text-[30px] lg:text-2xl">{item.title}</h2>
      <p className="text-[20px] lg:text-xl">{item.text}</p>
      <div className="lg:hidden flex justify-center gap-8 mt-6">
        <a
          href="#"
          className="bg-none border-2 border-t-0 border-x-0 border-b-[#ff0054] transition-[250ms] min-w-md text-xl uppercase tracking-widest"
        >
          View Site
        </a>
        <a
          href="#"
          className="bg-none border-2 border-t-0 border-x-0 border-b-[#ff0054] transition-[250ms] min-w-md text-xl uppercase tracking-widest"
        >
          View Code
        </a>
      </div>
    </div>
  );
};

export default CarouselItem;
