import { CheckCircle2 } from "lucide-react";

const About = () => {
  const benefits = [
    "Уединенное расположение в экологически чистом районе",
    "Полностью оборудованные домики со всеми удобствами",
    "Возможность насладиться природой в любое время года",
    "Идеальное место для семейного отдыха и встреч с друзьями",
    "Гибкие условия аренды под ваши потребности",
    "Безопасность и приватность вашего отдыха"
  ];

  return (
    <section id="about" className="py-16 bg-greenRavine-50">
      <div className="container px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-greenRavine-800 mb-4">О Green Ravine</h2>
            <p className="text-muted-foreground mb-6">
              Green Ravine — это уникальное место для вашего отдыха на природе в комфортных условиях. 
              Мы предлагаем в аренду уютные домики, расположенные в живописном месте среди леса и рядом с водоемами.
            </p>
            <p className="text-muted-foreground mb-8">
              Каждый домик оборудован всем необходимым для комфортного проживания — от кухонной техники до
              теплых полов и удобной мебели. Вы можете насладиться тишиной, свежим воздухом и красотой
              окружающей природы.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-greenRavine-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <img 
              src="/placeholder.svg" 
              alt="Природа вокруг домиков" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;