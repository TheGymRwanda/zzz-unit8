import Image from "next/image";
import image2 from "/public/assets/imgs/outdoor_presentation.webp";
import image3 from "/public/assets/imgs/team_having_fun.webp";
import image1 from "/public/assets/imgs/team_of_4.webp";

export default function GallerySimulation() {
  return (
    <section>
      <div className="relative min-h-screen">
        <Image src={image1} className="absolute w-74 top-20" />
        <Image src={image2} className="absolute top-0 w-74 left-24 z-[2]" />
        <Image src={image3} className="absolute w-74 top-64 left-60 z-[3]" />
        <Image
          src={image1}
          className="absolute w-74 top-8 left-[18.75rem] z-[4]"
        />
        <Image src={image2} className="absolute top-0 w-74 left-24 z-[2]" />
      </div>
    </section>
  );
}
