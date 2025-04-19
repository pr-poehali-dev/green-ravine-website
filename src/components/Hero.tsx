import { SITE_NAME, SITE_DESCRIPTION } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { CalendarDays } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative">
      {/* Фоновое изображение с оверлеем */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      <div 
        className="h-[70vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/placeholder.svg')" }}
      ></div>
      
      {/* Контент героя */}
      <div className="absolute inset-0 z-20 flex items-center">
        <div className="container px-4">
          <div className="max-w-2xl space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              <span className="text-greenRavine-300">{SITE_NAME}</span>
              <br />
              Отдых на природе в уютных домиках
            </h1>
            <p className="text-xl text-white/90">
              {SITE_DESCRIPTION}. Идеальное место для отдыха от городской суеты.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-greenRavine-600 hover:bg-greenRavine-700 text-white gap-2">
                <CalendarDays size={20} />
                Забронировать домик
              </Button>
              <Button variant="outline" className="bg-white/10 text-white hover:bg-white/20 border-white/30">
                Узнать больше
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;