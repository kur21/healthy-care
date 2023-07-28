import Link from "next/link";
import Image from "next/image";

import { PAGE_NAVIGATION } from "@/configs";
import DropdownNav from "./DropdownNav";
import MainNav from "./MainNav";
import styles from "./layout.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="wrapper flex justify-between items-center">
        <Link href={PAGE_NAVIGATION.HOME}>
          <Image
            src="/assets/icons/header-logo.svg"
            alt="healthy logo"
            width="0"
            height={46}
            priority
            className="w-full object-contain max-sm:h-12"
          />
        </Link>

        <nav className={styles.navigation}>
          <MainNav />
          <DropdownNav />
        </nav>
      </div>
    </header>
  );
};
export default Header;
