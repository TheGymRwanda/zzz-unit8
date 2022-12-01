/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";
import { galery } from "../../utils/galery";
import movingImg from "../../utils/moveImage";
export default function Gallery() {
  useEffect(() => {
    window.addEventListener("DOMContentLoaded", movingImg());
  }, []);
  return (
    <div className="relative h-screen">
      <div id="randsImages" className="">
        {galery.map((im) => {
          return (
            <img src={im.picture} key={im.id} alt="users" className="img" />
          );
        })}
      </div>
      <img src="/assets/imgs/default.webp" alt="" className="hidden def" />
      <div className="border-4 border-lime-500">
        <section className="randomPage">
          <div className="block opacity-100 wrapper randoms">
            <canvas
              id="randCanvas"
              width="1920"
              height="287"
              className=""
            ></canvas>
          </div>
        </section>
      </div>
      <div className="absolute w-full h-full text-center top-2/4 xl:hidden dummy text-muted-300">
        + tap to see more of us
      </div>
    </div>
  );
}
