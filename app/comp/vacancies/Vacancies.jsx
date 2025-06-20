
import Swiper from './swiper/Swiper';
import styles from './vacancies.module.css';

export default function Vacancies() {
  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <h2 className={styles.title}>Горячие вакансии</h2>
        <p className={styles.description}>
          Откройте для себя широкий спектр вакансий по всему миру. Мы помогаем найти работу за границей, которая подойдет именно вам.
          <br />
          В нашей базе — более 1000 актуальных предложений в различных сферах деятельности.
          <br />
          Хотите узнать больше? Свяжитесь с нами для получения персональных рекомендаций.
          <br />
          Мы поддержим вас на каждом этапе поиска и трудоустройства.
          <br />
          Ваша карьера начинается здесь!
        </p>
        <div className={styles.card}>
          <Swiper />
        </div>

        {/* Новый блок под Swiper */}
        <div className={styles.telegramSection}>
          <img
            src="/img_telegram.png" 
            alt="Telegram"
            className={styles.telegramImage}
          />
          <div className={styles.telegramContent}>
            <h3 className={styles.telegramTitle}>Присоединяйтесь к нашему каналу в Telegram:</h3>

            <div className={styles.features}>
              <div className={styles.featureItem}>
                <svg
                  className={styles.checkIcon}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#a1a9b2"
                  width="24px"
                  height="24px"
                >
                  <path d="M20.285 6.707L9 18l-5.285-5.285 1.414-1.414L9 15.172l9.871-9.871z" />
                </svg>
                <p>Ежедневное обновление списка вакансий</p>
              </div>
              <div className={styles.featureItem}>
                <svg
                  className={styles.checkIcon}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#a1a9b2"
                  width="24px"
                  height="24px"
                >
                  <path d="M20.285 6.707L9 18l-5.285-5.285 1.414-1.414L9 15.172l9.871-9.871z" />
                </svg>
                <p>Мгновенные уведомления о новых возможностях</p>
              </div>
              <div className={styles.featureItem}>
                <svg
                  className={styles.checkIcon}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#a1a9b2"
                  width="24px"
                  height="24px"
                >
                  <path d="M20.285 6.707L9 18l-5.285-5.285 1.414-1.414L9 15.172l9.871-9.871z" />
                </svg>
                <p>Быстрая подача заявки на вакансию</p>
              </div>
            </div>
          </div>

          <button className={styles.telegramButton}>Присоединиться в Телеграм</button>
        </div>
      </div>
    </div>
  );
}