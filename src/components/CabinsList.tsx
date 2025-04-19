import { cabins } from "@/lib/constants";
import CabinCard from "@/components/CabinCard";

const CabinsList = () => {
  return (
    <section id="cabins" className="py-16">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-greenRavine-800 mb-2">Наши домики</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Выберите домик по своему вкусу и насладитесь отдыхом на природе в комфортных условиях
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Для уточнения стоимости и условий аренды, пожалуйста, свяжитесь с нами по телефону
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cabins.map((cabin) => (
            <CabinCard key={cabin.id} cabin={cabin} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CabinsList;