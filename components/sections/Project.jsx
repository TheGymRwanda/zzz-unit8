import Image from "next/image";
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
        <div className="flex flex-col lg:relative mb-13 md:mb-23">
            <h4 className="text-xl text-muted-300">Projects</h4>

            {projectData.map((items) => {
                const { id, image, title, subtitle } = items;
                return (
                    <div key={id}>
                        <div className="xl:hidden">
                            <h3
                                id={id}
                                className={`mb-4 text-5.5xl leading-tighter`}
                                onClick={shownImageOnclik}
                            >
                                {title}
                            </h3>

                            <div
                                className={`${
                                    id === parseInt(shown) ? "" : "hidden"
                                }`}
                            >
                                <Image
                                    height="191"
                                    width="349"
                                    src={image}
                                    alt="project-image"
                                    className="w-full "
                                />
                                <p className="mb-12 text-xl leading-7 mt-2.5 lg:mb-0">
                                    {subtitle}
                                </p>
                            </div>
                        </div>

                        <div className="hidden overflow-hidden xl:flex group">
                            <h3
                                id={id}
                                className={`relative transition-all duration-500 cursor-pointer text-5.5xl leading-tighter group after:opacity-0 after:transition-all after:duration-500 after:bg-black after:w-full after:h-0.1 after:absolute after:bottom-0 after:-left-full group-hover:after:left-0 group-hover:after:opacity-100`}
                                onMouseOver={shownImageOnclik}
                                onMouseOut={hideImage}
                            >
                                {title}
                                <Image
                                    className="absolute hidden pt-1 mx-1 transition transform hover:duration-500 top-2 group-hover:inline "
                                    height="16"
                                    width="12"
                                    alt="cheron"
                                    src="/assets/icons/upRight_arrow.svg"
                                />
                            </h3>
                            <div
                                className={`${
                                    id === parseInt(shown)
                                        ? "mb-0 mt-0 self-center absolute right-0 top-16"
                                        : "hidden"
                                } `}
                            >
                                <Image
                                    className="border w-50 h-111 border-muted-50"
                                    src={image}
                                    alt="project-image"
                                />
                                <p className="text-xl leading-7 mt-2.5">
                                    {subtitle}
                                </p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
