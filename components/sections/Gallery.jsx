import React, { useEffect } from "react";
import { galery } from "../../utils/galery";
import movingImg from "../../utils/moveImage";

export default function Gallery() {
  useEffect(() => {
    window.addEventListener("DOMContentLoaded", movingImg());
  }, []);
  return (
    <div className="relative">
      <div id="randsImages" className="border-2 ">
        {galery.map((im) => {
          return (
            <img src={im.picture} key={im.id} alt="users" className="img" />
          );
        })}
      </div>
      <div className="wrapper">
        <section className="randomPage">
          <div className="block opacity-100 randoms">
            <canvas
              id="randCanvas"
              width="1920"
              height="287"
              className=""
            ></canvas>
          </div>
        </section>
      </div>
      <div className="absolute top-[50%] w-full h-full xl:hidden text-center dummy text-muted-300">
        + tap to see more of us
      </div>
    </div>
  );
}
