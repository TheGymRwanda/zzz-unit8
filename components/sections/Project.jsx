import Image from "next/image";
import React from "react";

export default function Project({ image, title, subtitle }) {
  return (
    <div>
      <div className='flex flex-col'>
        <h3>{title}</h3>
        <div>
          <Image height='191' width='349' src={image} alt='project-image' />
          <p>{subtitle}</p>
        </div>
      </div>
    </div>
  );
}
