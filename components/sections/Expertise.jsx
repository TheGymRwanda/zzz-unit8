import expertiseList from "/utils/expertiseData";
export default function Expertise() {
  return (
    <section className="flex justify-end xl:mb-11.5 lg:mb-35 md:mb-33 mb-11.6">
      <div className="text-xl leading-8 -tracking-0.01 md:text-2xl ml-7 ssm:ml-0">
        <h4 className=" text-muted-300">Expertise</h4>
        <div className="grid grid-cols-1 mt-2 md:mt-6 md:grid-cols-2 md:gap-y-3 gap-y-2 gap-x-6">
          {expertiseList.map((expertise, index) => (
            <h5
              key={index}
              className="w-full border-b border-muted-100 ssm:w-73 lg:w-74"
            >
              {expertise}
            </h5>
          ))}
        </div>
      </div>
    </section>
  );
}
