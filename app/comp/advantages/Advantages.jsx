
import styles from './advantages.module.css';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaGlobe } from 'react-icons/fa';

export default function Advantages() {
  const advantages = [
    {
      image: '/advantage_1.png',
      title: 'Широкий выбор работодателей',
      description:
        'Мы сотрудничаем с более чем 200 проверенными компаниями Евросоюза, что увеличивает шансы претендентов на трудоустройство в разных отраслях. Это дает кандидатам больше вариантов для выбора должности и мест работы.',
    },
    {
      image: '/advantage_2.png',
      title: 'Вакансии для всех',
      description:
        'Предлагаем широкий выбор вакансий для начинающих и опытных специалистов. IDENTO расширяет доступ к рынку труда для людей с различным уровнем квалификации.',
    },
    {
      image: '/advantage_3.png',
      title: 'Помощь в получении визы',
      description:
        'Оказываем комплексную поддержку в визовых вопросах. Это облегчает процесс миграции, делая переезд за границу проще и доступнее.',
    },
    {
      image: '/advantage_4.png',
      title: 'Бухгалтерская и юридическая поддержка',
      description:
        'Эти услуги гарантируют правовую безопасность и финансовую стабильность клиентов. Мы помогаем справиться с любыми вопросами и проблемами, которые могут возникнуть в процессе трудоустройства.',
    },
    {
      image: '/advantage_5.png',
      title: 'Защита интересов',
      description:
        'Поддерживаем клиентов в разрешении конфликтов и предоставляем юридическую помощь в спорных ситуациях. Также защищаем права кандидатов. Это необходимо для обеспечения справедливых условий труда.',
    },
  ];

  return (
    <div className={styles.container}>
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={styles.title}
      >
        Наши преимущества
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={styles.subtitle}
      >
        Наша компания выделяется на рынке трудоустройства в Европе благодаря своим преимуществам:
      </motion.p>

      <div className={styles.grid}>
        {advantages.map((adv, index) => (
          <motion.div
            key={index}
            className={styles.card}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Глобус */}
            <div className={styles.iconWrapper}>
              <FaGlobe className={styles.globeIcon} />
            </div>

            <div className={styles.imageWrapper}>
              <Image src={adv.image} alt={adv.title} width={90} height={130} />
            </div>
            <h3 className={styles.cardTitle}>{adv.title}</h3>
            <p className={styles.cardText}>{adv.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className={styles.footerText}
      >
        Эти преимущества делают сотрудничество с нашим агентством, IDENTO, эффективным для тех, кто стремится найти работу в Европе. Мы обеспечиваем максимальную поддержку и защиту на всех этапах.
      </motion.p>
    </div>
  );
}