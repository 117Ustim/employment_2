
"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaFileAlt, FaIdCard, FaBriefcaseMedical, FaSearch, FaGlobeEurope, FaUniversity } from "react-icons/fa";
import styles from './services.module.css';

const services = [
  {
    icon: <FaFileAlt color="#f28200" size={40} />,
    title: "Подготовка документов",
    description: "Мы берем на себя процесс подготовки и получения всех необходимых документов для работы и устройства в Европе. Помогаем оформить прописку по месту жительства и получить страховку в соответствии с местным законодательством.",
  },
  {
    icon: <FaIdCard color="#f28200" size={40} />,
    title: "Получение страхового полиса",
    description: "Нужен страховой полис в ЕС? Мы поможем!Наша компания оперативно оформит страховой полис любой категории – для поездок, авто, здоровья или бизнеса.Работаем по всей Европе, быстро, надежно и с полным сопровождением.",

  },
  {
    icon: <FaBriefcaseMedical color="#f28200" size={40} />,
    title: "Оформление медицинской справки",
    description: "Санитарная книжка может пригодиться для официантов, медработников, врачей, воспитателей, учителей. Наличие справки подтверждает состояние здоровья нанятого работника.",
  },
  {
    icon: <FaSearch color="#f28200" size={40} />,
    title: "Поиск работы",
    description: "Мы предлагаем индивидуальные консультации с нашими специалистами. Они помогают в трудоустройстве в странах Европы. При подборе вакансий ориентируемся на профессиональные цели и предпочтения клиентов.",
  },
  {
    icon: <FaGlobeEurope color="#f28200" size={40} />,
    title: "Легализация в странах",
    description: "Всесторонняя оценка вашей HR-системы. Выявление слабых мест и точек роста. Мы сопровождаем процесс легализации бизнеса и персонала в выбранной стране, учитывая все юридические и административные требования.",
  },
  {
    icon: <FaUniversity color="#f28200" size={40} />,
    title: "Открытие банковского счета",
    description: "Наличие кредитной или дебетовой карты упростит процесс оплаты счетов и получения заработной платы. Еще одним преимуществом будет возможность перевода денег со счета в Россию.",
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: false, margin: '-100px' });

  return (
    <div className={styles.container} ref={ref}>
      <motion.div 
        className={styles.header}
        initial={{ opacity: 0, y: -50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
        transition={{ duration: 0.8 }}
      >
        <h2>Наши услуги</h2>
        <p>Наше агентство предлагает широкий спектр услуг для тех, кто стремится работать в Европе и имеет свой бизнес:</p>
       
      </motion.div>

      <div className={styles.cards}>
        {services.map((service, index) => (
          <motion.div 
            key={index} 
            className={styles.card}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className={styles.icon}>{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}