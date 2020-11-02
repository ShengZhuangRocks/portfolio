import Link from "next/link";
import styles from "../styles/Layout.module.css";
import NavLinks from "./NavLinks";

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <Link href="/">
            <a>
              <i
                aria-hidden
                className="fas fa-shoe-prints"
                style={{ marginRight: "10px", transform: "rotate(180deg)" }}
              ></i>
              <strong>Sheng's Portofolio</strong>
            </a>
          </Link>
          <div>
            <NavLinks name="projects" />
            <NavLinks name="blogs" />
            <NavLinks name="contact" />
            <NavLinks name="about" />
            <span>|</span>
          </div>
        </nav>
      </header>
    </>
  );
}
