import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Phone } from "lucide-react";
import type { Cabin } from "@/lib/constants";
import { CONTACTS } from "@/lib/constants";

interface CabinCardProps {
  cabin: Cabin;
}

const CabinCard = ({ cabin }: CabinCardProps) => {
  const { title, description, capacity, features, image } = cabin;

  const handleCallClick = () => {
    window.location.href = `tel:${CONTACTS.phone}`;
  };

  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="aspect-video overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform hover:scale-105" 
        />
      </div>
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl text-greenRavine-800">{title}</CardTitle>
          <Badge className="bg-greenRavine-100 text-greenRavine-800 hover:bg-greenRavine-200">
            {capacity}
          </Badge>
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 mb-4">
          {features.map((feature, idx) => (
            <Badge key={idx} variant="outline" className="bg-greenRavine-50">
              {feature}
            </Badge>
          ))}
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Users size={16} />
          <span>{capacity}</span>
        </div>
      </CardContent>
      <CardFooter className="flex justify-center items-center border-t pt-4">
        <Button 
          className="bg-greenRavine-600 hover:bg-greenRavine-700 gap-2 w-full"
          onClick={handleCallClick}
        >
          <Phone size={16} />
          Позвонить для бронирования
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CabinCard;