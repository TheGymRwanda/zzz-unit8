import Image from "next/image";
import { useState } from "react";
import { projectData } from "../../utils/projectData";

export default function Project() {
  const [shown, setShown] = useState(0);
  const shownImageOnclik = (e) => {
    setShown(e.target.id);
  };
  return (
    <div className="flex flex-col lg:relative mb-13 md:mb-23">
      <h4 className="text-xl text-muted-300">Projects</h4>

      {projectData.map((items) => {
        const { id, image, title, subtitle } = items;

        return (
          <div key={id}>
            <div className="xl:hidden">
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
                  className="w-full "
                />
                <p className="mt-2.5 text-xl leading-7 mb-12 lg:mb-0">
                  {subtitle}
                </p>
              </div>
            </div>

            <div className="hidden xl:flex">
              <h3
                id={id}
                className={`text-5.5xl leading-12 group relative  cursor-pointer hover:underline decoration-2`}
                onMouseOver={shownImageOnclik}
              >
                {title}
                <Image
                  className="absolute hidden mx-2 transition transform hover:duration-500 top-2 group-hover:inline "
                  height="15"
                  width="15"
                  alt="cheron"
                  src="/assets/icons/upRight_arrow.svg"
                />
              </h3>
              <div
                className={`${
                  id === parseInt(shown)
                    ? "mb-0 mt-0 self-center absolute right-0 top-16 duration-1000"
                    : "hidden"
                } `}
              >
                <Image
                  height="437"
                  width="811"
                  src={image}
                  alt="project-image"
                />
                <p className="mt-2.5 text-xl leading-7">{subtitle}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
