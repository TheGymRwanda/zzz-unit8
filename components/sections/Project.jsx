import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { projectData } from "../../utils/projectData";

export default function Project() {
  const [shown, setShown] = useState(0);
  const shownImageOnclik = (e) => {
    if (shown == e.target.id) return setShown(0);
    setShown(e.target.id);
  };
  const hideImage = (e) => {
    setShown(0);
  };
  return (
    <div className="flex flex-col lg:relative xl:mb-34 lg:mb-12.1 md:mb-24.2 mb-11.8">
      <h4 className="text-xl leading-7 text-muted-300 md:mb-2.7">Projects</h4>
      {projectData.map((items) => {
        const { id, image, title, subtitle, link } = items;
        return (
          <div key={id}>
            <div className="xl:hidden">
              <h3
                id={id}
                className={`mb-4 text-5.4xl leading-11 xs:leading-12 xs:text-6.5xl`}
                onClick={shownImageOnclik}
              >
                {title}
              </h3>

              <Link href={link} target="_blank">
                <div
                  className={`${
                    id === parseInt(shown)
                      ? "transition-all duration-700"
                      : "hidden"
                  }`}
                >
                  <Image
                    src={image}
                    alt="project-image"
                    className="w-full -z-50 rounded-1.5xl drop-shadow-3xl"
                  />
                  <p className="mb-12 text-xl leading-7 mt-2.5 lg:mb-0">
                    {subtitle}
                  </p>
                </div>
              </Link>
            </div>

            <div className="hidden overflow-hidden xl:flex">
              <Link href={link} target="_blank" className="group">
                <h3
                  id={id}
                  className={`relative transition-all duration-500 cursor-pointer text-5.5xl leading-tighter group after:opacity-0 after:transition-all after:duration-500 after:bg-black after:w-full after:h-0.1 after:absolute after:bottom-1 after:-left-full group-hover:after:left-0 group-hover:after:opacity-100`}
                  onMouseOver={shownImageOnclik}
                  onMouseOut={hideImage}
                >
                  {title}
                  <Image
                    className="absolute pt-1 mx-1 opacity-0 group-hover:transition group-hover:opacity-100 group-hover:transform group-hover:duration-700 top-2 group-hover:inline"
                    height="16"
                    width="12"
                    alt="cheron"
                    src="/assets/icons/upRight_arrow.svg"
                  />
                </h3>
              </Link>
              <div
                className={`${
                  id === parseInt(shown)
                    ? "mb-0 mt-2 self-center absolute right-0 top-10 opacity-100 transition-all duration-700"
                    : "opacity-0 h-0"
                } `}
              >
                <Image
                  className="max-w-3.8xl rounded-1.5xl drop-shadow-3xl"
                  src={image}
                  alt="project-image"
                />
                <p className="text-xl leading-7 mt-2.5">{subtitle}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
