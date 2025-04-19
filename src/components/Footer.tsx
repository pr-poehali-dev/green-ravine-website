import { SITE_NAME, DISCLAIMER, CONTACTS } from "@/lib/constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-greenRavine-900 text-white pt-12 pb-6">
      <div className="container px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">{SITE_NAME}</h3>
            <p className="text-greenRavine-100 mb-4">
              Уютные домики для отдыха на природе с комфортом и заботой о каждом госте.
            </p>
            <p className="text-greenRavine-100 text-sm">
              {DISCLAIMER}
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Быстрые ссылки</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-greenRavine-100 hover:text-white transition-colors">О нас</a></li>
              <li><a href="#cabins" className="text-greenRavine-100 hover:text-white transition-colors">Домики</a></li>
              <li><a href="#nature" className="text-greenRavine-100 hover:text-white transition-colors">Природа</a></li>
              <li><a href="#gallery" className="text-greenRavine-100 hover:text-white transition-colors">Галерея</a></li>
              <li><a href="#contact" className="text-greenRavine-100 hover:text-white transition-colors">Контакты</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Контактная информация</h3>
            <address className="not-italic">
              <p className="mb-2">{CONTACTS.address}</p>
              <p className="mb-2">
                <a href={`tel:${CONTACTS.phone}`} className="text-greenRavine-100 hover:text-white transition-colors">
                  {CONTACTS.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${CONTACTS.email}`} className="text-greenRavine-100 hover:text-white transition-colors">
                  {CONTACTS.email}
                </a>
              </p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-greenRavine-700 pt-6 text-center text-greenRavine-300 text-sm">
          <p>© {currentYear} {SITE_NAME}. Все права защищены.</p>
          <p className="mt-2 text-xs">
            {DISCLAIMER}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;