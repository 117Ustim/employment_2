
import styles from './footer.module.css';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.content}>

        <div className={styles.leftSection}>
          <img src="/logo.png" alt="Company Logo" className={styles.logo} />
          <img src="/logo_text.png" alt="Small" className={styles.smallImage} />
        </div>


        <div className={styles.mapSection}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2623.2500854405757!2d2.2577597000000003!3d48.8915709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66f15faa714ed%3A0x4fa8bcdb34b81bf6!2sIDENTO!5e0!3m2!1sru!2sua!4v1750426110573!5m2!1sru!2sua" // вставь свою ссылку
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <a
            href="https://www.google.com/maps/place/IDENTO/@48.8915709,2.2577597,17z/data=!3m1!4b1!4m6!3m5!1s0x47e66f15faa714ed:0x4fa8bcdb34b81bf6!8m2!3d48.8915709!4d2.2577597!16s%2Fg%2F11c1tdrzll?entry=ttu&g_ep=EgoyMDI1MDYxNy4wIKXMDSoASAFQAw%3D%3D" // вставь свою ссылку
            target="_blank"
            rel="noopener noreferrer"
            className={styles.mapLink}
          >
            Открыть в Google Картах
          </a>
        </div>


        <div className={styles.infoSection}>
          <h3>Офис компании, Франция </h3>
          <p>г. Курбевуа</p>
          <p>Дата основания: 12.05.2016 (8 лет на рынке)</p>
          <p> Юридический адрес: Франция, г. Курбевуа</p>
          <p> Основные направления деятельности:</p>
          <ul>
            <li>Трудоустройство граждан в странах Европы</li>
            <li>Иммиграционные услуги (оформление ВНЖ и ПМЖ)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}