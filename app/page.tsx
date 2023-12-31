import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="justify-center inline-block max-w-3xl text-center">
        <h1 className={title()}>Selamat Datang di&nbsp;</h1>
        <h1 className={title({ color: "violet" })}>Dashboard TKD&nbsp;</h1>
        <br />

        <h2 className={subtitle({ class: "mt-4" })}>
          Silahkan selesaikan task anda hari ini
        </h2>
      </div>

      <div className="flex gap-3">
        <Link
          isExternal
          as={NextLink}
          href={siteConfig.links.docs}
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}>
          Documentation
        </Link>
        <Link
          isExternal
          as={NextLink}
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.github}>
          <GithubIcon size={20} />
          GitHub
        </Link>
      </div>
    </section>
  );
}
