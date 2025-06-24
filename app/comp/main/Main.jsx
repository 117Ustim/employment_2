"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from './main.module.css';

export default function Main() {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.container}>
        <div className={styles.section}>
          <video autoPlay muted loop className={styles.videoBackground}>
            <source src="/main_video.mp4" type="video/mp4" />
          </video>
          <div className={styles.content}>
            {/* <div className={styles.logo_block}>
              <Image src="/logo.png" alt="Logo" width={120} height={120} className={styles.logo} />
              <Image src="/logo_text.png" alt="Logo_text" width={120} height={120} className={styles.logoText} />
            </div> */}

            <h1 className={styles.title}>Кадровое агентство в Европе</h1>
            <p className={styles.description}>
              Кадровое агентство работы в Европе, IDENTO , занимается подбором вакансий в ЕС для кандидатов разного уровня квалификации. Легальная работа в Европе становится доступной каждому, благодаря IDENTO.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className={styles.button}
              onClick={() => window.open('https://t.me/+w-EOkEu_P0Q1YjI1', '_blank')}
            >
              Подробнее о нас
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}