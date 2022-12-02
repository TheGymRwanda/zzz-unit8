import CustomLink from "../ui/CustomLink";

export default function Header() {
  return (
    <section className="mt-11.1 xl:mb-34 lg:mb-23 md:mb-11.2 mb-8.1 w-full">
      <div className="flex gap-5.5 flex-col min-w-full text-2.5xl font-normal leading-7 lg:flex-row lg:justify-between sm:text-2xl -tracking-sm">
        <h1 className="flex-grow">Ape Unit</h1>
        <span className="lg:w-9/12 xl:w-50">
          Unit➇ is a pioneering technology company specialing in decentralised
          technologies that creates end-to-end digital experiences for protocols
          including
          <span className="text-primary-300">
            {" "}
            Ethereum, Tezos, Near, Algorand, Celo{" "}
          </span>
          and more. Its team of 2,500+ digital specialists across 30+ locations
          on 5 continents delivers pioneering work on a global scale with a
          boutique culture.{" "}
          <CustomLink
            text="Contact us"
            link={"mailto:web3@apeunit.com"}
            style={"text-2xl"}
          />
        </span>
      </div>
    </section>
  );
}
