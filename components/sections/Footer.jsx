import Link from "next/link";
import CustomLink from "../ui/CustomLink";

export default function Footer() {
  return (
    <footer className="flex flex-col text-xl gap-[3rem] -tracking-0.01 md:text-2xl md:flex-row md:justify-between mb-[3rem]">
      <address className="not-italic">
        Ape Unit GmbH <br /> Waldemarstraße 38, <br /> 10999 Berlin
      </address>
      <div className="flex flex-col">
        <CustomLink link="https://twitter.com/apeunit" text="Twitter" />
        <CustomLink link="https://www.facebook.com/apeunit/" text="Facebook" />
        <CustomLink
          link="https://de.linkedin.com/company/ape-unit"
          text="LinkedIn"
        />
      </div>
      <h4>
        <span>
          <Link href="https://apeunit.com/impressum.txt">Impressum</Link>
        </span>{" "}
        /{" "}
        <span>
          <Link href="https://apeunit.com/datenschutz.txt">Privacy</Link>
        </span>
      </h4>
    </footer>
  );
}
