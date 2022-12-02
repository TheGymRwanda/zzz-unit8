import { data } from "/utils/aboutUsData";
import UpArrow from "../vectors/UpArrow";
import { useState } from "react";
export default function AboutUsMobile() {
    const [selectedDiv, setSelectedDiv] = useState(0);

    function changeVisibility(id) {
        if (selectedDiv === id) return setSelectedDiv(null);
        setSelectedDiv(id);
    }
    return (
        <>
            {data.map((el, index) => {
                let { title, paragraphs } = el;
                return (
                    <div className="grid gap-5" key={index}>
                        <div
                            className={`flex items-center justify-between border-b cursor-pointer border-b-black -tracking-lg ${
                                selectedDiv === index &&
                                "text-primary-300 border-b-primary-300"
                            }`}
                            onClick={() => changeVisibility(index)}
                        >
                            {title}
                            <UpArrow color={selectedDiv === index} />
                        </div>
                        <div
                            className={`animate-wiggle duration-400 transition-all ${
                                selectedDiv === index
                                    ? "grid mb-11.18"
                                    : "hidden"
                            }`}
                        >
                            <p className="pb-6.5">{paragraphs[0]}</p>
                            <p>{paragraphs[1] || ""}</p>
                        </div>
                    </div>
                );
            })}
        </>
    );
}
