import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { SITE_NAME, CONTACTS } from "@/lib/constants";
import { useMobile } from "@/hooks/use-mobile";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMobile();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCallClick = () => {
    window.location.href = `tel:${CONTACTS.phone}`;
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b">
      <div className="container px-4 flex h-16 items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="flex items-center gap-2">
            <span className="text-greenRavine-700 text-xl font-bold">{SITE_NAME}</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className={`hidden md:flex items-center space-x-6`}>
          <a href="#about" className="text-foreground hover:text-greenRavine-600 transition-colors">О нас</a>
          <a href="#cabins" className="text-foreground hover:text-greenRavine-600 transition-colors">Домики</a>
          <a href="#nature" className="text-foreground hover:text-greenRavine-600 transition-colors">Природа</a>
          <a href="#gallery" className="text-foreground hover:text-greenRavine-600 transition-colors">Галерея</a>
          <a href="#contact" className="text-foreground hover:text-greenRavine-600 transition-colors">Контакты</a>
        </nav>

        <div className="hidden md:flex">
          <Button 
            className="bg-greenRavine-600 hover:bg-greenRavine-700 gap-2"
            onClick={handleCallClick}
          >
            <Phone size={16} />
            {CONTACTS.phone}
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button variant="ghost" className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X /> : <Menu />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && isMobile && (
        <div className="fixed inset-0 top-16 bg-white z-40 flex flex-col">
          <nav className="flex flex-col space-y-4 p-6 text-lg">
            <a href="#about" className="py-2 border-b" onClick={toggleMenu}>О нас</a>
            <a href="#cabins" className="py-2 border-b" onClick={toggleMenu}>Домики</a>
            <a href="#nature" className="py-2 border-b" onClick={toggleMenu}>Природа</a>
            <a href="#gallery" className="py-2 border-b" onClick={toggleMenu}>Галерея</a>
            <a href="#contact" className="py-2 border-b" onClick={toggleMenu}>Контакты</a>
            <Button 
              className="bg-greenRavine-600 hover:bg-greenRavine-700 gap-2 mt-4"
              onClick={() => {
                handleCallClick();
                toggleMenu();
              }}
            >
              <Phone size={16} />
              Позвонить
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;