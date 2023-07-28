import { footerNavigation } from "@/constants";
import Link from "next/link";
import styles from "./layout.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="wrapper flex items-center gap-[45px] max-[960px]:px-2.5 max-md:flex-col max-md:gap-6">
        {footerNavigation.map((link) => (
          <Link
            key={link.id}
            href={link.url}
            className="hover:text-primary-400 text-[11px]"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </footer>
  );
};
export default Footer;
