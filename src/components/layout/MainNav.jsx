"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { mainNavigation } from "@/constants";
import styles from "./layout.module.css"

const MainNav = () => {
  const pathname = usePathname();

  return (
    <>
      {mainNavigation.map((link) => (
        <Link
          key={link.id}
          href={link.url}
          className={
            pathname == link.url ? styles.navigation_link_active : styles.navigation_link
          }
        >
          <Image
            src={link.icon}
            alt={link.alt}
            width={32}
            height={32}
            className="max-md:w-6 max-md:h-6 object-contain"
          />
          <p className="min-w-24 max-sm:hidden max-md:min-w-fit">{link.name}</p>
        </Link>
      ))}
    </>
  );
};
export default MainNav;
