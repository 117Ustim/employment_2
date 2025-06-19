
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import styles from './company.module.css';

export default function Company() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-100px' }); 

  // Варианты анимаций
  const variantsLeftBlock = {
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
    hidden: { opacity: 0 },
  };

  const variantsTitle = {
    hidden: { y: -50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const variantsText = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.5,   // увеличить длительность для плавности
      ease: [0.43, 0.13, 0.23, 0.96], // плавный easing (custom bezier)
      delay: 0.3       // небольшая задержка для эффекта постепенного появления
    },
  },
};

  const variantsButton = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <div className={styles.container} ref={ref}>
      <motion.div
        className={styles.leftBlock}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={variantsLeftBlock}
      >
        <motion.h1 className={styles.title} variants={variantsTitle}>
          О компании
        </motion.h1>

        <motion.h2 className={styles.subtitleSecondary} variants={variantsText}>
          «IDENTO»: кто мы
        </motion.h2>

        <motion.p className={styles.text} variants={variantsText}>
          Международное кадровое агентство «IDENTO» – организация профессионального направления, занимающаяся поиском, подбором и оценкой рабочей подготовки кадров. Рекрутинговое агентство, для которого успех клиентов стал центром развития, всегда находит подходящий персонал для работодателей.
        </motion.p>

        <motion.p className={styles.text} variants={variantsText}>
          Кадровое агентство имеет ряд преимуществ:
        </motion.p>

        <motion.ul className={styles.list} variants={variantsText}>
          <li>профессиональный поиск руководства высшего звена и квалифицированных специалистов в необходимой области;</li>
          <li>правильный подбор кадров с учетом технологии рекрутинга;</li>
          <li>исследование заработной платы в зависимости от конкретной области или региона;</li>
          <li>оценка профессиональных качеств кадров.</li>
        </motion.ul>

        <motion.p className={styles.text} variants={variantsText}>
          При обращении в лучшее международное кадровое агентство «IDENTO», вы получаете гарантию на качественный подбор вакансий. Цель нашего кадрового агентства – предоставить качественный подход к решению комплексных задач, найти действительно нужных людей и прямо пропорционально поспособствовать успешному ведению бизнеса.
        </motion.p>

        <motion.a
          href="https://t.me/+Ecw2cS1TW1Q4NjM1"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.button}
          variants={variantsButton}
        >
          Связаться с нами
        </motion.a>
      </motion.div>

      <motion.div
        className={styles.rightBlock}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1.7, ease: 'easeOut' }}
      >
        <img
          src="photo_company.jpg"
          alt="Фотография компании"
          className={styles.image}
        />
      </motion.div>
    </div>
  );
}