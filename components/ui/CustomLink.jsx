import Image from "next/image";
import Link from "next/link";

export default function CustomLink({ link, text, style, target }) {
  return (
      <Link href={`${link ? link : "/"}`} target={target}>
        <div
          className={`relative transition-all duration-700 inline-flex items-center lg:text-2xl text-2.5xl font-normal leading-7  group ${style}`}
        >
          <span className="self-end -tracking-sm">{text}</span>
          <span
            className={`absolute transition-all duration-300 -right-4 top-0.6 group-hover:top-0.2 lg:group-hover:top-0.3 group-hover:-right-5`}
          >
            <Image
              src={"/assets/icons/upRight_arrow.svg"}
              width={"12"}
              height={"12"}
              alt="Up right icon"
            />
          </span>
        </div>
      </Link>
  );
}
