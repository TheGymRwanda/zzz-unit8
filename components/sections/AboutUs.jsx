import Image from "next/image";
import { useState } from "react";
import CustomLink from "../ui/CustomLink";
import { data } from "/utils/aboutUsData";

export default function AboutUs() {
    const [selectedDiv, setSelectedDiv] = useState(0);
    function changeVisibility(id) {
        if (selectedDiv === id) return setSelectedDiv(null);
        setSelectedDiv(id);
    }

    return (
        <div className="">
            <div className="grid w-full gap-6 mb-6.6 text-xl md:hidden ">
                {data.map((el, index) => {
                    let { title, paragraphs } = el;
                    return (
                        <div className="grid gap-4" key={index}>
                            <div
                                className={`flex items-center justify-between border-b cursor-pointer border-b-black -tracking-hug ${
                                    selectedDiv === index && "text-primary-300 border-b-primary-300"
                                }`}
                                onClick={() => changeVisibility(index)}
                            >
                                {title}

                                {/*  Dev decided to use an SVG because they want to change the color dynamically */}
                                <svg
                                    width="16"
                                    height="17"
                                    viewBox="0 0 16 17"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={`duration-300 ${
                                        selectedDiv === index
                                            ? "rotate-180 text-primary-300"
                                            : "rotate-0"
                                    }`}
                                >
                                    <path
                                        d="M13.9365 9.21997L7.4518 15.7047L0.967072 9.21997"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                    />
                                    <line
                                        x1="7.44336"
                                        y1="15.7045"
                                        x2="7.44336"
                                        y2="0.141126"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                    />
                                </svg>
                            </div>
                            <div
                                className={`gap-6 ${
                                    selectedDiv === index ? "grid" : "hidden"
                                }`}
                            >
                                <p>{paragraphs[0]}</p>
                                <p>{paragraphs[1] || ""}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="flex w-full justify-end md:min-h-96 flex-grow-0">
                <div className="md:flex md:flex-col gap-6 mb-6.6 hidden w-full text-2xl xl:w-50">
                    <div className="flex h-8 gap-6 text-muted-300 -tracking-hug">
                        {data.map((el, index) => {
                            return (
                                <div
                                    className={` transition duration-500 pb-1 cursor-pointer ${
                                        selectedDiv == index
                                            ? "border-b-1.5 border-b-primary-300 text-primary-300 "
                                            : " "
                                    }`}
                                    key={index}
                                    onClick={() => setSelectedDiv(index)}
                                >
                                    {el.title}
                                </div>
                            );
                        })}
                    </div>
                    <div className="grid -tracking-0.01 gap-6 relative">
                        {data.map((el, index) => {
                            return (
                                <div
                                    key={index}
                                    className={`absolute grid gap-4 transition duration-500 ${
                                        selectedDiv === index
                                            ? "text-black/100 relative"
                                            : "text-black/0 select-none"
                                    }`}
                                >
                                    <div>
                                        {el.paragraphs[0]}{" "}
                                        <CustomLink
                                            link={el.link}
                                            text="Learn more"
                                            style="text-2xl"
                                        />
                                    </div>
                                    <div>{el.paragraphs[1] || " "}</div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
