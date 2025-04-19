import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Instagram, MessageSquare, Send } from "lucide-react";
import { CONTACTS } from "@/lib/constants";

const Contact = () => {
  const handleSocialClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <section id="contact" className="py-16 bg-greenRavine-50">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-greenRavine-800 mb-2">Свяжитесь с нами</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Готовы забронировать домик или у вас остались вопросы? Мы всегда на связи!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl font-semibold mb-6 text-greenRavine-800">Наши контакты</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-greenRavine-100 p-3 rounded-full">
                  <Phone className="h-5 w-5 text-greenRavine-600" />
                </div>
                <div>
                  <h4 className="font-medium">Телефон</h4>
                  <a href={`tel:${CONTACTS.phone}`} className="text-muted-foreground hover:text-greenRavine-600">
                    {CONTACTS.phone}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-greenRavine-100 p-3 rounded-full">
                  <Mail className="h-5 w-5 text-greenRavine-600" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a href={`mailto:${CONTACTS.email}`} className="text-muted-foreground hover:text-greenRavine-600">
                    {CONTACTS.email}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-greenRavine-100 p-3 rounded-full">
                  <MapPin className="h-5 w-5 text-greenRavine-600" />
                </div>
                <div>
                  <h4 className="font-medium">Адрес</h4>
                  <p className="text-muted-foreground">{CONTACTS.address}</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4 text-greenRavine-800">Мы в соцсетях</h3>
              <div className="flex space-x-4">
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="rounded-full"
                  onClick={() => handleSocialClick(CONTACTS.social.instagram)}
                >
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="rounded-full"
                  onClick={() => handleSocialClick(CONTACTS.social.telegram)}
                >
                  <MessageSquare className="h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="rounded-full"
                  onClick={() => handleSocialClick(CONTACTS.social.whatsapp)}
                >
                  <Send className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-6 text-greenRavine-800">Быстрая заявка</h3>
            <form className="space-y-4">
              <div>
                <Input placeholder="Ваше имя" />
              </div>
              <div>
                <Input placeholder="Номер телефона" type="tel" />
              </div>
              <div>
                <Input placeholder="Email" type="email" />
              </div>
              <div>
                <Textarea placeholder="Сообщение" className="min-h-[120px]" />
              </div>
              <Button type="submit" className="w-full bg-greenRavine-600 hover:bg-greenRavine-700">
                Отправить заявку
              </Button>
              <p className="text-xs text-muted-foreground mt-2">
                Нажимая кнопку "Отправить заявку", вы соглашаетесь с политикой обработки персональных данных
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;