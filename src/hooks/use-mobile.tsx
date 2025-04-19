import { useState, useEffect } from "react";

export function useMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Функция для проверки размера экрана
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Проверка при монтировании
    checkMobile();

    // Слушатель события изменения размера окна
    window.addEventListener("resize", checkMobile);

    // Очистка слушателя при размонтировании
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return isMobile;
}
