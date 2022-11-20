import React, { useEffect } from "react";
import { galery } from "../../utils/galery";
import movingImg from "../../utils/moveImage";

export default function Gallery() {
  useEffect(() => {
    movingImg();
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
      <div className="absolute w-full h-full text-center top-2/4 xl:hidden dummy text-muted-300">
        + tap to see more of us
      </div>
    </div>
  );
}
