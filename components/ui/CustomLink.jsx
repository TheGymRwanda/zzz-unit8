import Image from "next/image";
import Link from "next/link";

export default function CustomLink({ link, text, style, target }) {
  return (
    <Link href={`${link ? link : "/"}`} target={target}>
      <div
        className={`relative inline-flex items-center text-xl font-normal leading-7 transition-all duration-300 group hover:underline ${style}`}
      >
        <span className="self-end ">{text}</span>
        <div
          className={`absolute -right-4 top-0.6 group-hover:top-0.2 lg:group-hover:top-0.3 group-hover:-right-5`}
        >
          <Image
            src={"/assets/icons/upRight_arrow.svg"}
            width={"12"}
            height={"12"}
            alt="Up right icon"
          />
        </div>
      </div>
    </Link>
  );
}
