import { Button } from "@/components/ui/button";
import { PhoneForwarded } from "lucide-react";
import { SITE_NAME, SITE_DESCRIPTION, CONTACTS } from "@/lib/constants";

const Hero = () => {
  const handleCallClick = () => {
    window.location.href = `tel:${CONTACTS.phone}`;
  };

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-greenRavine-950/70 to-greenRavine-800/50 z-10" />
        <img 
          src="/placeholder.svg" 
          alt="Природа" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container px-4 relative z-10">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {SITE_NAME}
          </h1>
          <p className="text-xl md:text-2xl mb-6">
            {SITE_DESCRIPTION}
          </p>
          <p className="mb-8 text-greenRavine-100">
            Идеальное место для тех, кто ценит комфорт и единение с природой. Аренда уютных домиков в живописном месте для вашего незабываемого отдыха.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-greenRavine-600 hover:bg-greenRavine-700 gap-2"
              onClick={handleCallClick}
            >
              <PhoneForwarded size={20} />
              Забронировать домик
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/10 text-white border-white/30 hover:bg-white/20"
              onClick={() => document.getElementById('cabins')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Посмотреть варианты
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;