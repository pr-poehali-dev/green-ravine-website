import BookingForm from "@/components/BookingForm";
import { MapPin, CalendarDays, Clock } from "lucide-react";

const Booking = () => {
  const infoItems = [
    {
      icon: <CalendarDays className="w-10 h-10 text-greenRavine-600" />,
      title: "Гибкие даты",
      description: "Минимальный срок аренды — 2 суток. Максимальный — без ограничений."
    },
    {
      icon: <Clock className="w-10 h-10 text-greenRavine-600" />,
      title: "Простое бронирование",
      description: "Заполните форму, и мы свяжемся с вами для подтверждения бронирования."
    },
    {
      icon: <MapPin className="w-10 h-10 text-greenRavine-600" />,
      title: "Удобное расположение",
      description: "Все наши домики находятся в экологически чистых районах с хорошей транспортной доступностью."
    }
  ];

  return (
    <section id="booking" className="py-16 bg-greenRavine-50">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-greenRavine-800 mb-2">Забронировать домик</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Забронируйте домик прямо сейчас и наслаждайтесь отдыхом на природе
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {infoItems.map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-medium text-lg text-greenRavine-800">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="lg:col-span-3">
            <BookingForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;