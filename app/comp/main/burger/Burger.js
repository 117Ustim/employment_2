import { useEffect, useRef } from "react";
import "./burger.css";

export default function Burger() {
  const menuRef = useRef(null);
  const menuToggleRef = useRef(null);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }

    if (menuToggleRef.current) {
      menuToggleRef.current.checked = false;
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuToggleRef.current?.checked &&
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        menuToggleRef.current.checked = false;
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="burger-menu" ref={menuRef}>
      <input id="menu-toggle" type="checkbox" ref={menuToggleRef} />
      <label className="menu-btn" htmlFor="menu-toggle">
        <span></span>
      </label>

      <div className="menubox">
        {/* Заголовок мобильного меню */}
        <div className="mobile-menu-header">
          <div className="mobile-logo">
            <img src="/logo.png" alt="IDENTO" className="mobile-logo-icon" />
            <img src="/logo_text.png" alt="IDENTO" className="mobile-logo-text" />
          </div>
          <p className="mobile-menu-subtitle">Навигация</p>
        </div>

        {/* Основные пункты меню */}
        <div className="block_menu">
          <button
            className="menu_button"
            onClick={() => scrollToSection("company")}
          >
            <svg className="menu-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10z"/>
            </svg>
            О нас
          </button>
          <button
            className="menu_button"
            onClick={() => scrollToSection("services")}
          >
            <svg className="menu-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"/>
            </svg>
            Услуги
          </button>
          <button
            className="menu_button"
            onClick={() => scrollToSection("advantages")}
          >
            <svg className="menu-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            Преимущества
          </button>
          <button
            className="menu_button"
            onClick={() => scrollToSection("vacancies")}
          >
            <svg className="menu-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/>
            </svg>
            Вакансии
          </button>
          <button
            className="menu_button"
            onClick={() => scrollToSection("team")}
          >
            <svg className="menu-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H17c-.8 0-1.54.37-2.01 1l-1.7 2.26A6.003 6.003 0 0 0 8 16v6h2v-6c0-2.21 1.79-4 4-4s4 1.79 4 4v6h2zm-8-4c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
            </svg>
            Команда
          </button>
          <button
            className="menu_button"
            onClick={() => scrollToSection("reviews")}
          >
            <svg className="menu-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
            </svg>
            Отзывы
          </button>
        </div>

        {/* Контактная кнопка */}
        <div className="mobile-contact-section">
          <button
            className="menu_button contact_button"
            onClick={() => scrollToSection("footer")}
          >
            <svg className="menu-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
            Контакты
          </button>
        </div>
      </div>
    </div>
  );
}
