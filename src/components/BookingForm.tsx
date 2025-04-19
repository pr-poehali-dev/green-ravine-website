import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useBookingForm } from "./booking/useBookingForm";
import SuccessMessage from "./booking/SuccessMessage";
import PersonalInfoFields from "./booking/PersonalInfoFields";
import BookingDetailsFields from "./booking/BookingDetailsFields";
import AdditionalInfoField from "./booking/AdditionalInfoField";

/**
 * Компонент формы бронирования домика
 * @returns {JSX.Element} - Форма бронирования
 */
const BookingForm = () => {
  const { form, isSubmitted, handleSubmit, resetForm } = useBookingForm();

  if (isSubmitted) {
    return <SuccessMessage onReset={resetForm} />;
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Забронировать домик</CardTitle>
        <CardDescription>
          Заполните форму, и мы свяжемся с вами для подтверждения бронирования
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
            {/* Персональная информация: имя, телефон, email */}
            <PersonalInfoFields form={form} />
            
            {/* Информация о бронировании: домик, гости, даты */}
            <BookingDetailsFields form={form} />
            
            {/* Дополнительные пожелания */}
            <AdditionalInfoField form={form} />

            <Button 
              type="submit" 
              className="w-full bg-greenRavine-600 hover:bg-greenRavine-700"
            >
              Отправить заявку
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default BookingForm;
