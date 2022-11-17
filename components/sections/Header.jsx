import CustomLink from "../ui/CustomLink";

export default function Header() {
    return (
        <section className="my-6.6  w-full">
            <div className="flex gap-5.5 flex-col min-w-full text-2.5xl font-normal leading-7 xl:flex-row lg:justify-between lg:text-2xl">
                <h1 className="flex-grow">
                    Ape Unit
                </h1>
                <span className="xl:w-50">
                    Unit➇ is a pioneering technology and marketing 
                    services company that creates end-to-end digital
                    experiences for brands such as 
                    <span className="text-primary-300">
                        {" "}Google, Philips, Audi, Twitch, Patagonia, eBay {" "}
                    </span> 
                    and more. Its team
                    of 2,500+ digital specialists across 30+ locations
                    on 5 continents delivers pioneering work on a global
                    scale with a boutique culture.  <CustomLink text="Contact us" link={"mailto:web3@apeunit.com"} style={"text-2xl"} /> 
                </span>
            </div>
        </section>    
    )
}