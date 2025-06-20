import { useEffect, useRef, useState } from 'react';
import styles from './swiper.module.css';

const slides = [

  {
    id: 1,
    image1: '/swiper/swiper_1.jpg',
    country: 'Италия, Парма ',
    description: 'Производство пасты Barilla',
    salary: 'ЗП: 15,50 €/час',
    position: 'Должность: Оператор производственной линии, контролер качества, сортировщик/упаковщик.'
  },
  {
    id: 2,
    image1: '/swiper/swiper_2.jpg',
    country: 'Германия, Дортмунд',
    description: 'Строительные объекты',
    salary: 'ЗП: 19 €/час',
    position: 'Должность: Маляры, Штукатуры, Монтажники, Сварщики, Электрики, бригады на отделочные работы.'
  }, {
    id: 3,
    image1: '/swiper/swiper_3.jpg',
    country: 'Швейцария, Ванген-Ольтен',
    description: 'Производство продуктов питания ',
    salary: 'ЗП: 19,20 €/час',
    position: 'Должность: Оператор кондитерского цеха, упаковщик, рабочий на погрузчик, сканировщик.'
  },
  {
    id: 4,
    image1: '/swiper/swiper_4.jpg',
    country: 'Германия, Штокельсдорф',
    description: 'Фабрика по производству марципана',
    salary: 'ЗП: 17,30 €/час',
    position: 'Должность: Контролер качества продукции и проверка на брак, стикеровщик, работа на погрузчике, водитель категории В.'
  },
  {
    id: 5,
    image1: '/swiper/swiper_5.jpg',
    country: 'Австрия, Вена  Голандия, Роттердам',
    description: 'Водители на производство',
    salary: 'ЗП: 19,30 €/час',
    position: 'Требуются водители:Категории В, Категории С, Категории СЕ, Берем до 60 лет!.'

  }
];

export default function Swiper() {
  // Настройки
  const transitionSpeed = 500; // скорость анимации в ms
  const autoPlayInterval = 3000; // время между слайдами в ms

  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    if (sliderRef.current) {
      const firstSlide = sliderRef.current.children[0];
      sliderRef.current.style.transition = `transform ${transitionSpeed}ms linear`;
      sliderRef.current.style.transform = `translateX(-${100 / slidesPerView()}%)`;

      setTimeout(() => {
        sliderRef.current.style.transition = 'none';
        sliderRef.current.appendChild(firstSlide);
        sliderRef.current.style.transform = 'translateX(0)';
      }, transitionSpeed);
    }
  };

  const slidesPerView = () => {
    if (window.innerWidth < 768) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  };

  // Свайп
  const startX = useRef(0);
  const moveX = useRef(0);

  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    moveX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = moveX.current - startX.current;
    if (diff < -50) {
      nextSlide();
    }
  };

  return (
    <div
      className={styles.wrapper}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className={styles.slider} ref={sliderRef}>
        {slides.map((slide, index) => (
          <div key={index} className={styles.slide}>
            <img src={slide.image1} alt={slide.country} className={styles.image} />
            <div className={styles.textBlock}>
              <h3>{slide.country}</h3>
              <p>{slide.description}</p>
              <p>{slide.salary}</p>
              <p>{slide.position}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}