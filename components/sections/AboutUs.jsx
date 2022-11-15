import Image from "next/image";
import { useEffect, useState } from "react";

export default function AboutUs() {
    const [selected, setSelected] = useState(null);
    function changeState(id) {
        if (selected === id) return setSelected(null);
        setSelected(id);
    }

    const data = [
        {
            title: "About us",
            paragraphs: [
                "Blockchain will do for cooperation what the internet did for communication - We believe that blockchain technology has the potential to shift financial models as we know them, creating revenue streams that are more sustainable and fair for users. We envision a future in which financial infrastructures are rather decentralised and horizontal, in which any member can have a say. Through its immutability, blockchain technology provides trustworthy infrastructures that allow cooperation on a large scale. Learn more",
                "Work Meaningful - With our work, we aim to impact society positively. The projects we get involved with the aim to solve significant problems in our society, sustainably and in the long run, rather than looking for a quick profit through speculation or encouraging harmful behavior.",
            ],
            link: "/about",
            collapsed: false,
        },
        {
            title: "What we do",
            paragraphs: [
                "Blockchain will do for cooperation what the internet did for communication - We believe that blockchain technology has the potential to shift financial models as we know them, creating revenue streams that are more sustainable and fair for users. We envision a future in which financial infrastructures are rather decentralised and horizontal, in which any member can have a say. Through its immutability, blockchain technology provides trustworthy infrastructures that allow cooperation on a large scale. Learn more",
                "Work Meaningful - With our work, we aim to impact society positively. The projects we get involved with the aim to solve significant problems in our society, sustainably and in the long run, rather than looking for a quick profit through speculation or encouraging harmful behavior.",
            ],
            link: "/about",
            collapsed: true,
        },
        {
            title: "Employment",
            paragraphs: [
                "Blockchain will do for cooperation what the internet did for communication - We believe that blockchain technology has the potential to shift financial models as we know them, creating revenue streams that are more sustainable and fair for users. We envision a future in which financial infrastructures are rather decentralised and horizontal, in which any member can have a say. Through its immutability, blockchain technology provides trustworthy infrastructures that allow cooperation on a large scale. Learn more",
            ],
            link: "/about",
            collapsed: true,
        },
    ];

    return (
        <div className="grid w-full gap-6 text-xl">
            {data.map((key, index) => {
                return (
                    <div className="grid gap-4" key={key}>
                        <div
                            className="flex items-center justify-between border-b border-b-black"
                            onClick={()=> changeState(index)}
                        >
                            {data[index].title}
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
                            <p>{data[index].paragraphs[0]}</p>
                            <p>{data[index].paragraphs[1] || ""}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
