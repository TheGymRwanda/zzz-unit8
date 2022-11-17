import React, { useEffect } from "react";
import { galery } from "../../utils/galery";
import movingImg from "../../utils/moveImage";

export default function Gallery() {
  useEffect(() => {
    window.addEventListener("DOMContentLoaded", movingImg());
  }, []);
  return (
    <div className="">
      <div id="randsImages" className="border-2 border-black">
        {galery.map((im) => {
          return (
            <img src={im.picture} key={im.id} alt="users" className="img" />
          );
        })}
      </div>
      <div className="relative wrapper">
        <section className="randomPage">
          <div className="block opacity-100 randoms">
            <canvas id="randCanvas" width="1920" height="187"></canvas>
          </div>
        </section>
      </div>
    </div>
  );
}
