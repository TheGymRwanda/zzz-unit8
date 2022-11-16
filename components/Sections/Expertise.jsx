import expertiseList from "../../utils/expertiseData";
export default function Expertise() {
  return (
    <section className="float-right">
      <div className="text-xl leading-8 -tracking-0.01 md:text-2xl">
        <h4 className=" text-muted-300">Expertise</h4>
        <div className="grid grid-cols-1 mt-5 md:grid-cols-2 gap-y-3 gap-x-6">
          {expertiseList.map((expertise, index) => (
            // used width of 70vw (w-70w) to intentionaly flow the text to 70% of the whole screen (wrapper margin included) but only on mobile screens below 400px of width
            <h5
              key={index}
              className="border-b border-muted-100 w-70w ssm:w-73 lg:w-74"
            >
              {expertise}
            </h5>
          ))}
        </div>
      </div>
    </section>
  );
}
