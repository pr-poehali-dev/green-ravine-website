import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Cloud, Waves, Mountain } from "lucide-react";

interface NatureFeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const NatureFeature = ({ icon, title, description }: NatureFeatureProps) => (
  <Card className="border-none shadow-sm hover:shadow-md transition-shadow">
    <CardContent className="p-6">
      <div className="flex flex-col items-center text-center">
        <div className="w-12 h-12 rounded-full bg-greenRavine-100 flex items-center justify-center mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-medium text-greenRavine-800 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </CardContent>
  </Card>
);

const Nature = () => {
  const features = [
    {
      icon: <Leaf className="h-6 w-6 text-greenRavine-600" />,
      title: "Первозданная природа",
      description: "Наши домики расположены в окружении нетронутой природы, вдали от городской суеты и шума."
    },
    {
      icon: <Cloud className="h-6 w-6 text-greenRavine-600" />,
      title: "Чистый воздух",
      description: "Насладитесь кристально чистым воздухом, наполненным ароматами леса и полевых трав."
    },
    {
      icon: <Waves className="h-6 w-6 text-greenRavine-600" />,
      title: "Водоемы рядом",
      description: "В пешей доступности находятся живописные озера и реки, где можно купаться и рыбачить."
    }
  ];

  return (
    <section id="nature" className="py-16">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-greenRavine-800 mb-2">Живописная природа</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Окунитесь в мир удивительной природы, окружающей наши домики
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {features.map((feature, idx) => (
            <NatureFeature
              key={idx}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="prose max-w-none">
            <h3 className="text-2xl font-semibold text-greenRavine-800 mb-4">Уникальное расположение</h3>
            <p>
              Наши домики расположены в одном из самых живописных уголков России. Здесь вы можете 
              насладиться тишиной и спокойствием вдали от городской суеты, но при этом добраться до нас 
              очень просто – всего 2 часа езды от Москвы.
            </p>
            <p>
              Местность славится своими лесами, где можно собирать грибы и ягоды, прекрасными озерами 
              с чистейшей водой и разнообразием флоры и фауны. В окрестностях можно встретить зайцев, 
              лис, белок и множество видов птиц.
            </p>
            <p>
              Для любителей активного отдыха доступны пешие и велосипедные маршруты различной сложности, 
              а также возможность рыбалки на ближайших водоемах.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="/placeholder.svg" alt="Природа" className="rounded-lg object-cover w-full h-full" />
            <img src="/placeholder.svg" alt="Озеро" className="rounded-lg object-cover w-full h-48" />
            <img src="/placeholder.svg" alt="Лес" className="rounded-lg object-cover w-full h-48" />
            <img src="/placeholder.svg" alt="Панорама" className="rounded-lg object-cover w-full h-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nature;