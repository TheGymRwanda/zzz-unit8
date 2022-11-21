import Image from "next/image";
import Link from "next/link";

export default function CustomLink({ link, text, style, target }) {
  return (
      <Link className="relative" href={`${link ? link : "/"}`} target={target}>
        <div
          className={`relative h-fit p-0 transition-all duration-700 inline-flex items-center lg:text-2xl text-2.5xl font-normal leading-7  group ${style}`}
        >
          <span className="relative  transition after:duration-700 inline-flex items-center lg:text-2xl text-2.5xl font-normal leading-7 -tracking-sm after:content-['↗'] after:relative after:-bottom-1 after:text-2.5xl after:lg:text-2xl after:lg:group-hover:-top-1 after:lg:group-hover:-right-1 ">{text}</span>
          <span
            className={`absolute transition-all duration-300 -right-4 bottom-0 group-hover:top-0.2 lg:group-hover:top-0.3 group-hover:-right-5`}
          >
           
          </span>
        </div>
      </Link>
  );
}
