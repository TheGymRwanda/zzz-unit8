import React, { useEffect } from "react";
import { galery } from "../../utils/galery";
import movingImg from "../../utils/moveImage";
import grayImage from "/public/assets/imgs/default.webp";
import Image from "next/image";
export default function Gallery() {
  useEffect(() => {
    window.addEventListener("DOMContentLoaded", movingImg());
  }, []);
  return (
    <div className="relative h-screen">
      <div id="randsImages">
        {galery.map((images) => {
          return (
            <Image
              src={images.picture}
              key={images.id}
              alt="users"
              className="img"
            />
          );
        })}
      </div>
      <Image src={grayImage} alt="" className="hidden gray-img" />
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
