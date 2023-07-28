"use client";

import { dropdownNavigation } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "./layout.module.css"

const DropdownNav = () => {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <div className="relative flex">
      <button
        className="cursor-pointer"
        onClick={() => setIsOpened((prev) => !prev)}
      >
        {isOpened ? (
          <Image
            src="/assets/icons/close.svg"
            alt="close icon"
            width={32}
            height={32}
            className="max-sm:w-6 max-sm:h-6 object-contain"
          />
        ) : (
          <Image
            src="/assets/icons/menu.svg"
            alt="menu icon"
            width={32}
            height={32}
            className="max-sm:w-6 max-sm:h-6 object-contain"
          />
        )}
      </button>

      {isOpened && (
        <div className={styles.menu_dropdown}>
          {dropdownNavigation.map((item) => (
            <Link key={item.id} href={item.url} className={styles.menu_dropdown_link} onClick={() => setIsOpened(false)}>
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
export default DropdownNav;
