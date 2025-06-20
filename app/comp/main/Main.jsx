"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from './main.module.css';

export default function Main() {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.container}>
        <div className={styles.leftSection}>
          <div className={styles.content}>
            <div className={styles.logo_block}>
              <Image src="/logo.png" alt="Logo" width={120} height={120} className={styles.logo} />
              <Image src="/logo_text.png" alt="Logo_text" width={120} height={120} className={styles.logoText} />
            </div>

            <h1 className={styles.title}>Кадровое агентство в Европе</h1>
            <p className={styles.description}>
              Кадровое агентство работы в Европе, IDENTO , занимается подбором вакансий в ЕС для кандидатов разного уровня квалификации. Легальная работа в Европе становится доступной каждому, благодаря IDENTO.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className={styles.button}
            >
              Подробнее о нас
            </motion.button>
          </div>
        </div>

        <div className={styles.rightSection}>
          <div className={styles.imageSection}>
            <Image src="/main_photo_2.png" alt="Main" fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: 'cover' }} />
          </div>
        </div>
      </div>
    </div>
  );
}