import Image from "next/image";
import { useState } from "react";
import { data } from "/utils/aboutUsData";

export default function AboutUs() {
    const [selected, setSelected] = useState(null);
    function changeState(id) {
        if (selected === id) return setSelected(null);
        setSelected(id);
    }

    return (
        <div className="grid w-full gap-6 text-xl">
            {data.map((el, index) => {
                let {title, paragraphs} = el;
                return (
                    <div className="grid gap-4" key={index}>
                        <div
                            className="flex items-center justify-between border-b border-b-black"
                            onClick={() => changeState(index)}
                        >
                            {title}
                            {selected === index ? (
                                <Image
                                    src="/assets/icons/down_arrow.svg"
                                    width={15}
                                    height={15}
                                    alt="Down arrow"
                                />
                            ) : (
                                <Image
                                    src="/assets/icons/up_arrow.svg"
                                    width={15}
                                    height={15}
                                    alt="Up arrow"
                                />
                            )}
                        </div>
                        <div
                            className={`gap-6 ${
                                selected === index ? "grid" : "hidden"
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
