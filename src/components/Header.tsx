import { SITE_NAME } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-sm border-b">
      <div className="container flex justify-between items-center h-16 px-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-greenRavine-600 flex items-center justify-center text-white font-bold">
            GR
          </div>
          <h1 className="text-xl font-semibold text-greenRavine-800">{SITE_NAME}</h1>
        </div>

        {/* Навигация для десктопа */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#about" className="text-sm font-medium hover:text-greenRavine-600 transition-colors">
            О нас
          </a>
          <a href="#cabins" className="text-sm font-medium hover:text-greenRavine-600 transition-colors">
            Домики
          </a>
          <a href="#booking" className="text-sm font-medium hover:text-greenRavine-600 transition-colors">
            Бронирование
          </a>
          <a href="#contacts" className="text-sm font-medium hover:text-greenRavine-600 transition-colors">
            Контакты
          </a>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="outline" size="sm" className="gap-2">
            <Phone size={16} />
            <span>Позвонить</span>
          </Button>
          <Button size="sm" className="bg-greenRavine-600 hover:bg-greenRavine-700">
            Забронировать
          </Button>
        </div>

        {/* Мобильное меню */}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* Мобильная навигация */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white border-b shadow-lg">
          <div className="flex flex-col p-4 space-y-4">
            <a 
              href="#about" 
              className="text-sm font-medium p-2 hover:bg-greenRavine-50 rounded"
              onClick={toggleMenu}
            >
              О нас
            </a>
            <a 
              href="#cabins" 
              className="text-sm font-medium p-2 hover:bg-greenRavine-50 rounded"
              onClick={toggleMenu}
            >
              Домики
            </a>
            <a 
              href="#booking" 
              className="text-sm font-medium p-2 hover:bg-greenRavine-50 rounded"
              onClick={toggleMenu}
            >
              Бронирование
            </a>
            <a 
              href="#contacts" 
              className="text-sm font-medium p-2 hover:bg-greenRavine-50 rounded"
              onClick={toggleMenu}
            >
              Контакты
            </a>
            <Button size="sm" className="w-full bg-greenRavine-600 hover:bg-greenRavine-700">
              Забронировать
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;