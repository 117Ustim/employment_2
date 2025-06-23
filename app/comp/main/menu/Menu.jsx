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
        staggerChildren: 0.1,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      } 
    },
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
          <motion.button
            className={styles.menuButton}
            variants={buttonVariants}
            onClick={() => scrollToSection("advantages")}
          >
            Преимущества
          </motion.button>
        </motion.div>

        <motion.div 
          className={styles.logo}
          variants={logoVariants}
          initial="hidden"
          animate="visible"
        >
          <div
            className={styles.logo_block}
            onClick={() => scrollToSection("main")}
            style={{ cursor: "pointer" }}
          >
            <img src="/logo.png" alt="IDENTO Logo" className={styles.logoImage} />
            <img src="/logo_text.png" alt="IDENTO" className={styles.logoText} />
          </div>
        </motion.div>

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
            Команда
          </motion.button>
          <motion.button
            className={styles.menuButton}
            variants={buttonVariants}
            onClick={() => scrollToSection("reviews")}
          >
            Отзывы
          </motion.button>
          <motion.button
            className={`${styles.menuButton} ${styles.contactButton}`}
            variants={buttonVariants}
            onClick={() => window.open('https://t.me/+w-EOkEu_P0Q1YjI1', '_blank')}
          >
            Контакты
          </motion.button>
        </motion.div>
      </nav>

      <div className={styles.menu_1000}>
        <Burger />
      </div>
    </>
  );
}