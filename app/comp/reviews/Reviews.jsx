import styles from './reviews.module.css';

const reviews = [
  {
    id: 1,
    name: 'Смирнов Андрей',
    position: 'Инженер-программист',
    location: 'Германия',
    image: '/rew/reviews_1.jpg',
    rating: 5,
    text: 'Огромная благодарность компании IDENTO за помощь в трудоустройстве в Европе. Все организовано быстро и качественно. Рекомендую! Благодаря их профессионализму, я смог найти работу в кратчайшие сроки, и условия меня полностью устроили. На каждом этапе чувствовалась забота и поддержка со стороны сотрудников компании. Это был приятный и продуктивный опыт.',
  },
  {
    id: 2,
    name: 'Светина Мария',
    position: 'Менеджер по продажам',
    location: 'Польша',
    image: '/rew/reviews_2.jpg',
    rating: 5,
    text: 'Спасибо команде IDENTO! Благодаря вам я нашла отличную работу за границей и полностью довольна условиями. Настоящие профессионалы! Я получила полное сопровождение, начиная с подготовки документов и заканчивая адаптацией на новом рабочем месте. Без вашей поддержки я бы вряд ли справилась с этим сложным процессом. Вы лучшие в своем деле, буду советовать всем!',
  },
  {
    id: 3,
    name: 'Есенова Айгуль',
    position: 'Медицинская сестра',
    location: 'Чехия',
    image: '/rew/reviews_3.jpg',
    rating: 5,
    text: 'Выражаю признательность компании IDENTO за качественную помощь и поддержку на всех этапах. Смело советую всем друзьям! В процессе оформления все было предельно ясно, сотрудники терпеливо объясняли каждую деталь. Благодаря вам я успешно прошла собеседование и теперь уверенно работаю в новой компании. Спасибо за вашу заботу и профессионализм!',
  },
  {
    id: 4,
    name: 'Кулубаев Бакай',
    position: 'Строитель',
    location: 'Нидерланды',
    image: '/rew/reviews_4.jpg',
    rating: 5,
    text: 'IDENTO – это настоящие специалисты! Сопровождали меня от начала до конца, очень благодарен за такую возможность трудоустройства. Мне помогли составить резюме, пройти все интервью и даже подготовили к переезду. Каждый шаг был четко выстроен и максимально понятен. Я чувствовал себя уверенно, потому что рядом была команда, которой можно доверять. Спасибо вам огромное!',
  },
  {
    id: 5,
    name: 'Фаррух Набиев',
     position: 'Завод',
    location: 'Чехия',
    image: '/rew/reviews_5.jpg',
    rating: 5,
    text: 'Привет! Я Фаррух, через Иденто поехал в Чехию, работаю на заводе. Работа стабильная, смены нормальные. Не устаю сильно, начальство нормальное. Кормят на работе, жильё недалеко. Суббота — как дополнительный день, беру по желанию. Благодарен вам, ребята!',
  },
  {
    id: 6,
    name: 'Даврон Ибрагимов',
    position: 'Склад',
    location: 'Германия',
    image: '/rew/reviews_6.jpg',
    rating: 5,
    text: 'Салам алейкум! Я Даврон, уехал через Иденто в Германию, работаю на складе. Условия нормальные, жильё есть, платят вовремя. Работа не сложная — коробки собираем. Кормят хорошо, не жалуюсь. По выходным иногда подрабатываю. Спасибо вам, всё чётко сделали!',
  },
];

const StarRating = ({ rating }) => {
  return (
    <div className={styles.stars}>
      {[...Array(5)].map((_, index) => (
        <span
          key={index}
          className={`${styles.star} ${index < rating ? styles.filled : styles.empty}`}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default function Reviews() {
  return (
    <section className={styles.reviewsSection}>
      <div className={styles.container}>
        {/* Заголовок секции */}
        <div className={styles.header}>
          <div className={styles.titleWrapper}>
            <div className={styles.decorativeBar}></div>
            <h2 className={styles.title}>Отзывы наших клиентов</h2>
          </div>
          <p className={styles.subtitle}>
            Узнайте, что говорят о нас люди, которые уже успешно трудоустроились в Европе
          </p>
        </div>

        {/* Декоративные элементы */}
        <div className={styles.decorativeElements}>
          <div className={styles.circle1}></div>
          <div className={styles.circle2}></div>
        </div>

        {/* Карточки отзывов */}
        <div className={styles.reviewsGrid}>
          {reviews.map((review, index) => (
            <article key={review.id} className={styles.reviewCard}>
              {/* Верхняя часть карточки */}
              <div className={styles.cardHeader}>
                <div className={styles.avatarWrapper}>
                  <img 
                    src={review.image} 
                    alt={review.name} 
                    className={styles.avatar} 
                  />
                  <div className={styles.avatarBorder}></div>
                </div>
                <div className={styles.reviewerInfo}>
                  <h3 className={styles.reviewerName}>{review.name}</h3>
                  <p className={styles.reviewerPosition}>{review.position}</p>
                  <p className={styles.reviewerLocation}>{review.location}</p>
                  <StarRating rating={review.rating} />
                </div>
              </div>

              {/* Текст отзыва */}
              <div className={styles.reviewContent}>
                <p className={styles.reviewText}>{review.text}</p>
              </div>

              {/* Декоративная полоска */}
              <div className={styles.cardDecor}></div>
            </article>
          ))}
        </div>

        {/* Нижний текст */}
        <div className={styles.footerText}>
          <p>
            Присоединяйтесь к тысячам довольных клиентов, которые уже нашли работу своей мечты в Европе
          </p>
        </div>
      </div>
    </section>
  );
}