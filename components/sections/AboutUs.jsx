import Image from "next/image";
import { useState } from "react";
import { data } from "/utils/aboutUsData";

export default function AboutUs() {
    const [selectedDiv, setSelectedDiv] = useState(0);
    function changeVisibility(id) {
        if (selectedDiv === id) return setSelectedDiv(null);
        setSelectedDiv(id);
    }

    return (
        <>
            <div className="grid w-full gap-6 mb-6.6 text-xl md:hidden">
                {data.map((el, index) => {
                    let { title, paragraphs } = el;
                    return (
                        <div className="grid gap-4" key={index}>
                            <div
                                className="flex items-center justify-between border-b cursor-pointer border-b-black tracking-hug"
                                onClick={() => changeVisibility(index)}
                            >
                                {title}
                                <Image
                                    src="/assets/icons/down_arrow.svg"
                                    width={15}
                                    height={15}
                                    alt="Down arrow"
                                    className={`duration-300 ${
                                        selectedDiv === index
                                            ? "rotate-180"
                                            : "rotate-0"
                                    }`}
                                />
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
            <div className="md:grid gap-6 mb-6.6 hidden w-full text-2xl">
                <div className="flex gap-6 text-muted-300 tracking-hug">
                    {data.map((el, index) => {
                        return (
                            <span
                                className={` transition-all duration-500 pb-1 ${
                                    selectedDiv === index &&
                                    "border-b border-b-primary-300 text-primary-300 "
                                }`}
                                key={index}
                                onClick={() => changeVisibility(index)}
                            >
                                {el.title}
                            </span>
                        );
                    })}
                </div>
                <div className="grid -tracking-0.01 gap-6 relative">
                    {data.map((el, index) => {
                        return (
                            <div
                                key={index}
                                className={`absolute grid gap-4 transition-all duration-500 ${
                                    selectedDiv === index
                                        ? "text-black/100"
                                        : "text-black/0"
                                }`}
                            >
                                <p>{el.paragraphs[0]}</p>
                                <p>{el.paragraphs[1] || " "}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}
