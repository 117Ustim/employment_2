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

      <ul className="menubox">
        <span className="menu-item"></span>
        <div className="block_menu">
          <button
            className="menu_button"
            onClick={() => scrollToSection("main")}
          >
            Главная
          </button>
          <button
            className="menu_button"
            onClick={() => scrollToSection("company")}
          >
            О нас
          </button>
          <button
            className="menu_button"
            onClick={() => scrollToSection("services")}
          >
            Услуги
          </button>
          <button
            className="menu_button"
            onClick={() => scrollToSection("vacancies")}
          >
            Вакансии
          </button>
          <button
            className="menu_button"
            onClick={() => scrollToSection("team")}
          >
            Сотрудники
          </button>
          <button
            className="menu_button"
            onClick={() => scrollToSection("reviews")}
          >
            Отзывы
          </button>
        </div>
      </ul>
    </div>
  );
}
