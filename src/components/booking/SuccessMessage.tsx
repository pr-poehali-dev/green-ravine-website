import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

interface SuccessMessageProps {
  onReset: () => void;
}

const SuccessMessage = ({ onReset }: SuccessMessageProps) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 bg-greenRavine-100 rounded-full flex items-center justify-center">
            <CheckCircle2 className="w-8 h-8 text-greenRavine-600" />
          </div>
        </div>
        <CardTitle className="text-center text-2xl">Заявка отправлена!</CardTitle>
        <CardDescription className="text-center">
          Мы свяжемся с вами в ближайшее время для подтверждения бронирования.
        </CardDescription>
      </CardHeader>
      <CardContent className="text-center">
        <Button 
          onClick={onReset} 
          variant="outline"
          className="mt-4"
        >
          Отправить новую заявку
        </Button>
      </CardContent>
    </Card>
  );
};

export default SuccessMessage;
