import Image from "next/image";
import { useState } from "react";
import { projectData } from "../../utils/projectData";

export default function Project() {
  const [shown, setShown] = useState(0);
  const shownImageOnclik = (e) => {
    setShown(e.target.id);
  };
  return (
    <div className="flex flex-col mb-13 md:mb-23">
      <h4 className="text-xl text-muted-300">Projects</h4>

      {projectData.map((items) => {
        const { id, image, title, subtitle } = items;

        return (
          <div key={id} className="">
            <h3
              id={id}
              className={`text-5.5xl leading-12 mb-4`}
              onClick={shownImageOnclik}
            >
              {title}
            </h3>
            <div className={`${id === parseInt(shown) ? "" : "hidden"}`}>
              <Image
                height="191"
                width="349"
                src={image}
                alt="project-image"
                className="w-full"
              />
              <p className="mt-2.5 text-xl leading-7 mb-12">{subtitle}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
