import Image from "next/image";
import Link from "next/link";

export default function CustomLink({ link, text, style, target }) {
  return (
      <Link className="relative" href={`${link ? link : "/"}`} target={target}>
        <div
          className={`relative h-fit p-0 transition-all inline-flex items-center lg:text-2xl text-2.5xl font-normal leading-7  group `}
        >
          <span className={`group-hover:no-underline transition-none duration-0.4 relative after:absolute after:-right-4 after:-bottom-1  transition after:duration-0.4 inline-flex items-center sm:text-2xl text-2.5xl font-normal leading-7 -tracking-sm after:content-['↗']  underline  group-hover:no_undeline after:text-2.5xl after:lg:text-2xl lg:after:group-hover:-right-5 lg:after:group-hover:bottom-1 ${style} `}>{text}</span>

        </div>
      </Link>
  );
}
