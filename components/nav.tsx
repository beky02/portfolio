import Button from "../common-components/button";
import Link from "next/link";
import { useRouter } from "next/router";

export const Nav = () => {
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
          key={index}
          index={index + 1}
          title={item.title}
          href={item.href}
          isActive={router.asPath === item.href}
        />
      ))}
      <Button
        className="px-5 py-2 text-md"
        onClick={() => {
          window.location.href = "mailto:berekettadege09@gmail.com";
        }}
      >
        Resume
      </Button>
    </div>
  );
};

const NavItem = ({
  index,
  title,
  href,
  isActive,
}: {
  index: number;
  title: string;
  href: string;
  isActive: boolean;
}) => {
  return (
    <Link href={href}>
      <div className="text-secondary-200 text-sm cursor-pointer hover:text-primary">
        <span className="text-primary">
          {index < 10 ? `0${index}` : index}.
        </span>{" "}
        <span className={isActive ? "text-primary" : ""}></span>
        {title}
      </div>
    </Link>
  );
};
