import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Droplets, Mountain } from "lucide-react";

const Nature = () => {
  const activities = [
    {
      icon: <Leaf className="h-10 w-10 text-greenRavine-600" />,
      title: "Прогулки по лесу",
      description: "Насладитесь прогулками по живописным тропам в окружении вековых деревьев и уникальной флоры."
    },
    {
      icon: <Droplets className="h-10 w-10 text-greenRavine-600" />,
      title: "Отдых у воды",
      description: "Искупайтесь в кристально чистой воде или отправьтесь на рыбалку на ближайшем озере или реке."
    },
    {
      icon: <Mountain className="h-10 w-10 text-greenRavine-600" />,
      title: "Экспедиции и пикники",
      description: "Организуйте пикник на природе или отправьтесь в мини-экспедицию по живописным окрестностям."
    }
  ];

  return (
    <section id="nature" className="py-16 bg-gradient-to-b from-white to-greenRavine-50">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-greenRavine-800 mb-2">Природа вокруг</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Наши домики расположены в живописной местности, где вы сможете насладиться всеми прелестями природы
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {activities.map((activity, index) => (
            <Card key={index} className="border-none shadow-md bg-white">
              <CardContent className="pt-6 flex flex-col items-center text-center">
                <div className="mb-4 bg-greenRavine-100 p-4 rounded-full">
                  {activity.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-greenRavine-800">{activity.title}</h3>
                <p className="text-muted-foreground">{activity.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <div className="rounded-lg overflow-hidden h-60 md:h-80">
            <img src="/placeholder.svg" alt="Природа" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-lg overflow-hidden h-60 md:h-80 md:mt-8">
            <img src="/placeholder.svg" alt="Озеро" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-lg overflow-hidden h-60 md:h-80">
            <img src="/placeholder.svg" alt="Лес" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nature;