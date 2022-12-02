import { Tab } from "@headlessui/react";
import {useRef, useEffect } from "react";
import classNames from "../../utils/classNames";
import CustomLink from "../ui/CustomLink";
import AboutUsMobile from "./AboutUsMobile";
import { data } from "/utils/aboutUsData";

export default function AboutUs() {
    useEffect(() => {
        tabs.current.style.setProperty(
            "--lineWidth",
            tabs.current.children[0].offsetWidth
        );
    }, []);

    const tabs = useRef();

    function animateTabs(currentIndex) {
        tabs.current.style.setProperty(
            "--lineWidth",
            tabs.current.children[currentIndex].offsetWidth
        );
        let linePosition = 0;

        for (let i = 0; i < currentIndex; i++) {
            linePosition += tabs.current.children[i].offsetWidth + 43;
        }
        tabs.current.style.setProperty("--linePosition", linePosition);
    }

    return (
        <section>
            <div className="grid w-full gap-6 text-xl mb-6.6 md:hidden">
                <AboutUsMobile />
            </div>
            <div className="flex justify-end flex-grow-0 w-full md:min-h-94 md:max-h-96">
                <div className="hidden w-4/5 gap-6 text-2xl md:flex md:flex-col mb-6.6 xl:w-50.5">
                    <Tab.Group
                        defaultIndex={0}
                        onChange={(index) => animateTabs(index)}
                    >
                        <Tab.List
                            className={`flex h-8 gap-10.75 text-muted-300 -tracking-lg relative about-us__tabs  `}
                            ref={tabs}
                        >
                            {data.map((el, index) => (
                                <Tab
                                    key={index}
                                    className={({ selected }) =>
                                        classNames(
                                            "outline-none duration-500  overflow-hidden relative group pb-1 cursor-pointer",
                                            selected ? `text-primary-300 ` : ""
                                        )
                                    }
                                >
                                    {el.title}
                                </Tab>
                            ))}
                        </Tab.List>
                        <Tab.Panels className="grid gap-6 mt-2 -tracking-lg">
                            {data.map((el, idx) => (
                                <Tab.Panel
                                    key={idx}
                                    className={classNames("grid")}
                                >
                                    <div className="lg:pb-7 md:pb-6.7">
                                        {el.paragraphs[0]}{" "}
                                        <CustomLink
                                            link={el.link}
                                            text="Learn more"
                                            style="text-2xl"
                                            target="_blank"
                                        />
                                    </div>
                                    <div>{el.paragraphs[1] || " "}</div>
                                </Tab.Panel>
                            ))}
                        </Tab.Panels>
                    </Tab.Group>
                </div>
            </div>
        </section>
    );
}
