import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays, Users, MapPin, CheckCircle2 } from "lucide-react";
import { cabins } from "@/lib/constants";

const bookingFormSchema = z.object({
  name: z.string().min(2, { message: "Имя должно содержать не менее 2 символов" }),
  phone: z.string().min(10, { message: "Введите корректный номер телефона" }),
  email: z.string().email({ message: "Введите корректный email" }),
  cabin: z.string({ required_error: "Выберите домик" }),
  guests: z.string({ required_error: "Укажите количество гостей" }),
  dates: z.string().min(1, { message: "Выберите даты заезда и выезда" }),
  message: z.string().optional(),
});

type BookingFormValues = z.infer<typeof bookingFormSchema>;

const BookingForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<BookingFormValues>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      cabin: "",
      guests: "",
      dates: "",
      message: "",
    },
  });

  function onSubmit(data: BookingFormValues) {
    console.log(data);
    setIsSubmitted(true);
    // В реальном сценарии здесь был бы запрос к API
  }

  if (isSubmitted) {
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
            onClick={() => setIsSubmitted(false)} 
            variant="outline"
            className="mt-4"
          >
            Отправить новую заявку
          </Button>
        </CardContent>
      </Card>
    );
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
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Имя</FormLabel>
                    <FormControl>
                      <Input placeholder="Иван Иванов" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Телефон</FormLabel>
                    <FormControl>
                      <Input placeholder="+7 (___) ___-__-__" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="example@mail.ru" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid md:grid-cols-3 gap-4">
              <FormField
                control={form.control}
                name="cabin"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Домик</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите домик" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {cabins.map((cabin) => (
                          <SelectItem key={cabin.id} value={cabin.id.toString()}>
                            {cabin.title}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="guests"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Количество гостей</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {[1, 2, 3, 4, 5, 6].map((num) => (
                          <SelectItem key={num} value={num.toString()}>
                            {num} {num === 1 ? "гость" : num < 5 ? "гостя" : "гостей"}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="dates"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Даты</FormLabel>
                    <FormControl>
                      <Input placeholder="01.06 - 07.06" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Дополнительные пожелания</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Расскажите о ваших пожеланиях или задайте вопрос..." 
                      className="resize-none" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full bg-greenRavine-600 hover:bg-greenRavine-700">
              Отправить заявку
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default BookingForm;