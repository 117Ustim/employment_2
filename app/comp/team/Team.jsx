
"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import styles from './team.module.css';
import { FaUsers } from "react-icons/fa";

const teamMembers = [
  {
    id: 1,
    name: "Войтенко Владимир Викторович",
    position: "Директор компании, руководитель юридического отдела",
    education: "Доктор наук по международному праву, Вильнюсский университет (Литва)",
    experience: "Опыт работы в компании 7 лет.",
    photo: "/1/team_1.jpg", 
  },
 
  { id: 2, name: "Вересков Максим Олегович", position: "Regional Manager (менеджер по работе с клиентами)", education: "Европейский гуманитарный университет ' International and Comparative Law '", experience: "Опыт работы 3 года в компании", photo: "/1/team_2.jpg" },
  { id: 3, name: "Ковалёв Александр Дмитриевич ", position: "Customer Onboarding Manager (менеджер по адаптации клиентов)", education: "Белорусский государственный университет (БГУ, Минск) ' Международное право '", experience: "Опыт работы 4 года в компании", photo: "/1/team_3.jpg" },
  { id: 4, name: "Филатов Алексей Олегович ", position: "Менеджер по работе с клиентами (Human Resources Manager)", education: "Белорусский государственный университет (БГУ) Юридический факультет ", experience: "Опыт работы 4,5 года", photo: "/1/team_4.jpg" },
  { id: 5, name: "Смирнов Артем Сергеевич", position: "Менеджер по работе с клиентами: консультации, обработка запросов", education: "СПб ГБПОУ «Колледж туризма и гостиничного сервиса» (программа «Торговое дело» или «Менеджмент»)", experience: "Опыт работы в компании 2 года", photo: "/1/team_5.jpg" },
  { id: 6, name: "Никитинская Анна Николаевна", position: "Менеджер по работе с клиентами", education: "Российский университет дружбы народов", experience: "Опыт работы 3 года в компании", photo: "/1/team_6.jpg" },
  { id: 7, name: "Басова Наталия Николаевна", position: "Менеджер по работе с клиентами, региональный менеджер", education: "Высшее экономическое образование (Белорусский государственный экономический университет, специальность «Международное право»", experience: "Опыт работы 3 года", photo: "/1/team_7.jpg" },
];

export default function Team() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <section ref={ref} className={styles.teamSection}>
         <div className={styles.container}>
        
        
      <div className={styles.header}>
        <FaUsers className={styles.icon} />
        <h2 className={styles.title}>Наша команда</h2>
      </div>
      <p className={styles.subtitle}>Команда экспертов всегда на связи!</p>

      <div className={styles.cardsWrapper}>
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.id}
            className={styles.card}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className={styles.imageWrapper}>
              <div className={styles.decoration}></div>
              <Image src={member.photo} alt={member.name} width={100} height={100} className={styles.image} />
            </div>
            <div className={styles.info}>
              <h3 className={styles.name}>{member.name}</h3>
              <p className={styles.position}>{member.position}</p>
              <p className={styles.education}>{member.education}</p>
              <p className={styles.experience}>{member.experience}</p>
            </div>
          </motion.div>
        ))}
      </div>
      </div>
    </section>
  );
}