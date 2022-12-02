import Link from "next/link";
import CustomLink from "../ui/CustomLink";

export default function Footer() {
  return (
    <footer>
      <div className="flex flex-col text-xl gap-11.1 -tracking-0.01 md:text-2xl md:flex-row md:justify-between md:mb-11.1 lg:mb-14 mb-22.7 xl:mb-13.1">
        <address className="not-italic">
          <p>Ape Unit GmbH</p>
          <p>Waldemarstraße 38, </p>
          <p>10999 Berlin</p>
        </address>
        <div className="flex flex-col">
          <CustomLink
            link="https://twitter.com/apeunit"
            text="Twitter"
            target="_blank"
            style={"no-underline"}
          />
          <CustomLink
            link="https://www.facebook.com/apeunit/"
            text="Facebook"
            target="_blank"
            style={"no-underline"}
          />
          <CustomLink
            link="https://de.linkedin.com/company/ape-unit"
            text="LinkedIn"
            target="_blank"
            style={"no-underline"}
          />
        </div>
        <h4>
          <span>
            <Link href="https://apeunit.com/impressum.txt" target="_blank">
              Impressum
            </Link>
          </span>{" "}
          /{" "}
          <span>
            <Link href="https://apeunit.com/datenschutz.txt" target="_blank">
              Privacy
            </Link>
          </span>
        </h4>
      </div>
    </footer>
  );
}
