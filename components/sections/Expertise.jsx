import expertiseList from "/utils/expertiseData";
export default function Expertise() {
  return (
    <section className="flex justify-end mb-11.2 md:mb-33 lg:mb-24">
      <div className="text-xl leading-8 -tracking-0.01 md:text-2xl ml-7 ssm:ml-0">
        <h4 className=" text-muted-300">Expertise</h4>
        <div className="grid grid-cols-1 mt-5 md:grid-cols-2 gap-y-3 gap-x-6">
          {expertiseList.map((expertise, index) => (
            <h5
              key={index}
              className="border-b border-muted-100 w-full ssm:w-73 lg:w-74"
            >
              {expertise}
            </h5>
          ))}
        </div>
      </div>
    </section>
  );
}
