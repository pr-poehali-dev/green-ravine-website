import { SITE_NAME, CONTACTS, DISCLAIMER } from "@/lib/constants";
import { Phone, Mail, MapPin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contacts" className="bg-greenRavine-900 text-white">
      <div className="container px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-greenRavine-800 font-bold">
                GR
              </div>
              <h3 className="text-xl font-semibold">{SITE_NAME}</h3>
            </div>
            <p className="text-greenRavine-100 mb-6">
              Уютные домики для отдыха на природе в живописном уголке с чистым воздухом и красивыми пейзажами.
            </p>
            <p className="text-sm text-greenRavine-300 italic">
              {DISCLAIMER}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone size={18} className="text-greenRavine-400" />
                <a href={`tel:${CONTACTS.phone}`} className="hover:text-greenRavine-300 transition-colors">
                  {CONTACTS.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="text-greenRavine-400" />
                <a href={`mailto:${CONTACTS.email}`} className="hover:text-greenRavine-300 transition-colors">
                  {CONTACTS.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={18} className="text-greenRavine-400 mt-1" />
                <span>{CONTACTS.address}</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Присоединяйтесь к нам</h3>
            <div className="flex gap-3 mb-6">
              <a href={CONTACTS.social.instagram} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon" className="rounded-full border-greenRavine-700 text-white hover:bg-greenRavine-800 hover:text-white">
                  <Instagram size={18} />
                </Button>
              </a>
              <a href={CONTACTS.social.telegram} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon" className="rounded-full border-greenRavine-700 text-white hover:bg-greenRavine-800 hover:text-white">
                  <span className="text-lg">✈️</span>
                </Button>
              </a>
              <a href={CONTACTS.social.whatsapp} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon" className="rounded-full border-greenRavine-700 text-white hover:bg-greenRavine-800 hover:text-white">
                  <span className="text-lg">📱</span>
                </Button>
              </a>
            </div>
            <Button className="w-full bg-greenRavine-600 hover:bg-greenRavine-700">Забронировать</Button>
          </div>
        </div>

        <div className="border-t border-greenRavine-800 mt-8 pt-6 text-center text-sm text-greenRavine-400">
          <p>© {currentYear} {SITE_NAME}. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;