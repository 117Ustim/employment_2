"use client";

import { motion } from "framer-motion";
import Burger from "../burger/Burger";
import styles from "./menu.module.css";

export default function Menu() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };


  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.5, // Задержка между кнопками
      },
    },
  };


  const buttonVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <>
      <nav className={styles.menu}>
        <motion.div
          className={styles.left}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.button
            className={styles.menuButton}
            variants={buttonVariants}
            onClick={() => scrollToSection("main")}
          >
            Главная
          </motion.button>
          <motion.button
            className={styles.menuButton}
            variants={buttonVariants}
            onClick={() => scrollToSection("company")}
          >
            О нас
          </motion.button>
          <motion.button
            className={styles.menuButton}
            variants={buttonVariants}
            onClick={() => scrollToSection("services")}
          >
            Услуги
          </motion.button>
        </motion.div>

        <div className={styles.logo}>
          <div
            className={styles.logo_block}
            onClick={() => scrollToSection("main")}
            style={{ cursor: "pointer" }}
          >
            <img src="/logo.png" alt="Logo" className={styles.logoImage} />
            <img src="/logo_text.png" alt="LogoText" className={styles.logoText} />
          </div>
        </div>

        <motion.div
          className={styles.right}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.button
            className={styles.menuButton}
            variants={buttonVariants}
            onClick={() => scrollToSection("vacancies")}
          >
            Вакансии
          </motion.button>
          <motion.button
            className={styles.menuButton}
            variants={buttonVariants}
            onClick={() => scrollToSection("team")}
          >
            Сотрудники
          </motion.button>
          <motion.button
            className={styles.menuButton}
            variants={buttonVariants}
            onClick={() => scrollToSection("reviews")}
          >
            Отзывы
          </motion.button>
        </motion.div>
      </nav>

      <div className={styles.menu_1000}>
        <Burger />
      </div>
    </>
  );
}