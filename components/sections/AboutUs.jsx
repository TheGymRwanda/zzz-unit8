import Image from "next/image";
import { useState } from "react";
import { data } from "/utils/aboutUsData";

export default function AboutUs() {
    const [selectedDiv, setSelectedDiv] = useState(null);
    function changeState(id) {
        if (selectedDiv === id) return setSelectedDiv(null);
        setSelectedDiv(id);
    }

    return (
        <div className="grid w-full gap-6 mb-12 text-xl">
            {data.map((el, index) => {
                let { title, paragraphs } = el;
                return (
                    <div className="grid gap-4" key={index}>
                        <div
                            className="flex items-center justify-between border-b cursor-pointer border-b-black"
                            onClick={() => changeState(index)}
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
    );
}
