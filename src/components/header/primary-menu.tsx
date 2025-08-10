"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useSelectedLayoutSegments } from "next/navigation";
export const PRIMARY_MENU = [
  {
    title: "Packages",
    href: "/packages",
    icon: "",
  },
  {
    title: "Homestays",
    href: "/homestays",
    icon: "",
  },
  {
    title: "Experiences",
    href: "/experiences",
    icon: "IconGroup",
  },
  {
    title: "Circuits",
    href: "/circuits",
    icon: "IconTrekking",
  },
  {
    title: "Blog",
    href: "/blog",
    icon: "IconOpenBook",
  },
  {
    title: "Impact",
    href: "/impact",
    icon: "IconHeartSpark",
  },
  {
    title: "About",
    href: "/about",
    icon: "IconInfoCircleFilled",
  },
];
function PrimaryMenu() {
  const segments = useSelectedLayoutSegments();
  console.log("segemnts",segments)
  const basePath = `/${segments?.[segments.length - 1]}`;
  //   const { isTransparent } = useHeader();
  console.log("Base paths", basePath);

  return (
    <nav>
      <ul className="flex flex-wrap gap-x-5 justify-center">
        {PRIMARY_MENU.map((item, index) => (
          <li
            key={index}
            className={cn(
              "font-semibold text-lg md:text-base data-[active='true']:text-red-500 transition-colors"
            )}
            data-active={basePath === item.href}
          >
            <Link href={item.href} title={item.title}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
export default PrimaryMenu;
