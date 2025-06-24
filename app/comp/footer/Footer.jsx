import styles from './footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Логотип и контакты */}
        <div className={styles.logoSection}>
          <div className={styles.logoWrapper}>
            <img src="/logo.png" alt="IDENTO Logo" className={styles.logo} />
            <img src="/logo_text.png" alt="IDENTO" className={styles.logoText} />
          </div>
          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>📍</span>
              <div>
                <p className={styles.contactLabel}>Адрес офиса</p>
                <p className={styles.contactValue}>г. Курбевуа, Франция</p>
              </div>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>📅</span>
              <div>
                <p className={styles.contactLabel}>Дата основания</p>
                <p className={styles.contactValue}>12.05.2016 (8 лет на рынке)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Карта */}
        <div className={styles.mapSection}>
          <h3 className={styles.sectionTitle}>Наш офис</h3>
          <div className={styles.mapWrapper}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2623.2500854405757!2d2.2577597000000003!3d48.8915709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66f15faa714ed%3A0x4fa8bcdb34b81bf6!2sIDENTO!5e0!3m2!1sru!2sua!4v1750426110573!5m2!1sru!2sua"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="IDENTO Office Location"
            />
          </div>
          <a
            href="https://www.google.com/maps/place/IDENTO/@48.8915709,2.2577597,17z/data=!3m1!4b1!4m6!3m5!1s0x47e66f15faa714ed:0x4fa8bcdb34b81bf6!8m2!3d48.8915709!4d2.2577597!16s%2Fg%2F11c1tdrzll?entry=ttu&g_ep=EgoyMDI1MDYxNy4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.mapLink}
          >
            Открыть в Google Картах →
          </a>
        </div>

        {/* Информация о компании */}
        <div className={styles.infoSection}>
          <h3 className={styles.sectionTitle}>О компании</h3>
          <div className={styles.companyInfo}>
            <p className={styles.infoText}>
              <strong>IDENTO</strong> - ведущая компания в сфере трудоустройства и иммиграционных услуг в Европе.
            </p>
            <div className={styles.servicesList}>
              <h4 className={styles.servicesTitle}>Основные направления:</h4>
              <ul className={styles.servicesItems}>
                <li>Трудоустройство граждан в странах Европы</li>
                <li>Иммиграционные услуги (оформление ВНЖ и ПМЖ)</li>
                <li>Консультации по вопросам переезда</li>
                <li>Поддержка на всех этапах процесса</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Нижняя часть footer */}
      <div className={styles.bottomSection}>
        <div className={styles.bottomContainer}>
          <p className={styles.copyright}>
            © IDENTO. Все права защищены.
          </p>
          <div className={styles.socialLinks}>
            <a href="/" className={styles.socialLink} aria-label="Telegram">
              <img src="/img_telegram.png" alt="Telegram" className={styles.socialIcon} />
            </a>
          </div>
        </div>
        <p className={styles.additionalInfo}>
          Если у вас остались вопросы, пожалуйста, свяжитесь с нами через любой удобный для вас мессенджер или напишите нам на почту: <a href="mailto:Idento.work.info@gmail.com" className={styles.emailLink}>Idento.work.info@gmail.com</a>
        </p>
      </div>
    </footer>
  );
}