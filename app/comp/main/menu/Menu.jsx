"use client";

import styles from "./menu.module.css";

export default function Menu() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={styles.menu}>
      <div className={styles.left}>
        <button  className={styles.menuButton}onClick={() => scrollToSection("main")}>Main</button>
        <button  className={styles.menuButton}onClick={() => scrollToSection("history")}>History</button>
      </div>

      <div className={styles.logo}>
        <span>Logo</span>
      </div>

      <div className={styles.right}>
        <button className={styles.menuButton}onClick={() => scrollToSection("header")}>Header</button>
        <button className={styles.menuButton}onClick={() => scrollToSection("footer")}>Footer</button>
      </div>
    </nav>
  );
}