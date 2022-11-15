import Link from "next/link";

export default function CustomLink({ link , text , style }) {
    return (
        <Link href={`${link ? link : "/"}`}>
            <span className={`font-normal group transition-all duration-300 text-xl leading-7 relative inline-flex items-center hover:underline  ${style}`}>
                <span className="self-end ">
                    {text}
                </span>
                <div className=" absolute -right-4 top-0.6 group-hover:top-0.2  lg:group-hover:top-0.3 group-hover:-right-5">
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.89648 1.10303H11.5328V9.73939" stroke="black" stroke-width="1.5"/>
                        <line x1="11.5694" y1="1.13995" x2="1.20576" y2="11.5036" stroke="black" stroke-width="1.5"/>
                    </svg>
                </div>
            </span>
        </Link >
    )
}