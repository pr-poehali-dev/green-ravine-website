import { SITE_NAME } from "@/lib/constants";
import { CheckCircle2 } from "lucide-react";

const About = () => {
  const benefits = [
    "Экологически чистый район",
    "Полностью оборудованные домики",
    "Удобное расположение",
    "Близость к природным достопримечательностям"
  ];

  return (
    <section id="about" className="py-16 bg-secondary">
      <div className="container px-4">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-greenRavine-800">О <span className="text-greenRavine-600">{SITE_NAME}</span></h2>
            <p className="text-gray-700 mb-6">
              Мы предлагаем уютные домики для отдыха на природе в живописном уголке с чистым воздухом и красивыми пейзажами. 
              Наши домики расположены в экологически чистом районе, вдали от городского шума и суеты.
            </p>
            <p className="text-gray-700 mb-6">
              Каждый домик оснащен всем необходимым для комфортного проживания: мебелью, кухонной техникой, санузлом. 
              На территории есть места для барбекю, детская площадка и парковка.
            </p>
            <ul className="space-y-3">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-2">
                  <CheckCircle2 className="text-greenRavine-600" size={20} />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-lg overflow-hidden">
              <img 
                src="/placeholder.svg" 
                alt="Домик в Green Ravine" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 w-48 h-48 rounded-lg overflow-hidden border-4 border-white shadow-lg hidden md:block">
              <img 
                src="/placeholder.svg" 
                alt="Природа вокруг" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;