import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CONTACTS, DISCLAIMER } from "@/lib/constants";

interface ContactItemProps {
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

// Компонент для информационного блока
const ContactItem = ({ icon, title, description }: ContactItemProps) => (
  <div className="flex gap-4">
    <div className="shrink-0">
      {icon}
    </div>
    <div>
      <h3 className="font-medium text-lg text-greenRavine-800">{title}</h3>
      <div className="text-gray-600">{description}</div>
    </div>
  </div>
);

const Contact = () => {
  const contactItems = [
    {
      icon: <Clock className="w-10 h-10 text-greenRavine-600" />,
      title: "Всегда на связи",
      description: "Звоните в любое удобное для вас время, мы ответим на все ваши вопросы"
    },
    {
      icon: <Phone className="w-10 h-10 text-greenRavine-600" />,
      title: "Телефон",
      description: (
        <a href={`tel:${CONTACTS.phone}`} className="hover:text-greenRavine-700 transition-colors">
          {CONTACTS.phone}
        </a>
      )
    },
    {
      icon: <MapPin className="w-10 h-10 text-greenRavine-600" />,
      title: "Расположение",
      description: "Все наши домики находятся в экологически чистых районах с хорошей транспортной доступностью."
    }
  ];

  return (
    <section id="contact" className="py-16 bg-greenRavine-50">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-greenRavine-800 mb-2">Свяжитесь с нами</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Позвоните нам, чтобы уточнить условия аренды и задать интересующие вопросы
          </p>
          <p className="text-xs text-muted-foreground mt-2">{DISCLAIMER}</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {contactItems.map((item, index) => (
              <ContactItem
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
          <div className="lg:col-span-3">
            <Card className="w-full">
              <CardHeader>
                <CardTitle className="text-center text-2xl">Хотите арендовать домик?</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-gray-600">
                  Позвоните нам напрямую для быстрого оформления аренды. Мы расскажем о доступных датах, 
                  условиях проживания и ответим на все ваши вопросы.
                </p>
                <div className="flex justify-center gap-4 flex-wrap">
                  <Button 
                    className="bg-greenRavine-600 hover:bg-greenRavine-700 gap-2"
                    size="lg"
                    onClick={() => window.location.href = `tel:${CONTACTS.phone}`}
                  >
                    <Phone className="w-4 h-4" />
                    Позвонить сейчас
                  </Button>
                  
                  <Button 
                    variant="outline"
                    size="lg"
                    onClick={() => window.location.href = `https://wa.me/${CONTACTS.social.whatsapp.replace(/\D/g, '')}`}
                  >
                    Написать в WhatsApp
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;