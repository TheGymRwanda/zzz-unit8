import { Tab } from "@headlessui/react";
import { useState } from "react";
import classNames from "../../utils/classNames";
import CustomLink from "../ui/CustomLink";
import UpArrow from "../vectors/UpArrow";
import { data } from "/utils/aboutUsData";

export default function AboutUs() {
  const [selectedDiv, setSelectedDiv] = useState(0);
  function changeVisibility(id) {
    if (selectedDiv === id) return setSelectedDiv(null);
    setSelectedDiv(id);
  }
  return (
    <section>
      <div className="grid w-full gap-6 text-xl mb-6.6 md:hidden">
        {data.map((el, index) => {
          let { title, paragraphs } = el;
          return (
            <div className="grid gap-4" key={index}>
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
                className={`gap-6 ${selectedDiv === index ? "grid" : "hidden"}`}
              >
                <p className="pb-6.5">{paragraphs[0]}</p>
                <p>{paragraphs[1] || ""}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-end flex-grow-0 w-full md:min-h-94">
        <div className="hidden w-4/5 gap-6 text-2xl md:flex md:flex-col mb-6.6 xl:w-50">
          <Tab.Group defaultIndex={0}>
            <Tab.List className="flex h-8 gap-10.75 text-muted-300 -tracking-lg">
              {data.map((el, index) => (
                <Tab
                  key={index}
                  className={({ selected }) =>
                    classNames(
                      "outline-none after:opacity-0 transition-all duration-500 after:bg-primary-300 after:w-full after:h-0.1 after:transition-all after:duration-500 after:ease-in after:absolute after:bottom-0 relative group overflow-hidden pb-1 cursor-pointer",
                      selected
                        ? "after:!left-0 after:opacity-100 text-primary-300"
                        : " "
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
                  className={classNames(
                    "grid gap-4 transition-all duration-500"
                  )}
                >
                  <div className="lg:pb-7 md:pb-6.7">
                    {el.paragraphs[0]}{" "}
                    <CustomLink
                      link={el.link}
                      text="Learn more"
                      style="text-2xl"
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
