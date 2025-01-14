import { useRouter } from "next/router";
import Link from "next/link";
import Button from "../common-components/button";

interface NavItemProps {
  index: number;
  title: string;
  href: string;
  isActive: boolean;
}

function NavItem({ index, title, href, isActive }: NavItemProps) {
  return (
    <Link href={href}>
      <div className="text-secondary-200 text-sm cursor-pointer hover:text-primary">
        <span className="text-primary">{index < 10 ? `0${index}` : index}.</span>{" "}
        <span className={isActive ? "text-primary" : ""}>{title}</span>
      </div>
    </Link>
  );
}

export default function Nav() {
  const router = useRouter();
  const navItems = [
    { title: "About", href: "#about" },
    { title: "Projects", href: "#projects" },
    { title: "Contact", href: "#contact" },
  ];

  return (
    <div className="flex flex-row h-24 justify-end items-center gap-x-8">
      {navItems.map((item, index) => (
        <NavItem
          key={item.title}
          index={index + 1}
          title={item.title}
          href={item.href}
          isActive={router.asPath === item.href}
        />
      ))}
      <Button
        className="px-5 py-2 text-md"
        onClick={() =>
          window.open(
            "https://docs.google.com/document/d/1OgCYVG_3HAyFLLfIJ753hBesOM4L1Ywc-ZuN0vAvHGI/edit?usp=sharing",
            "_blank"
          )
        }
      >
        Resume
      </Button>
    </div>
  );
}
