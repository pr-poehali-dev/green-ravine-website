import { z } from "zod";

export const bookingFormSchema = z.object({
  name: z.string().min(2, { message: "Имя должно содержать не менее 2 символов" }),
  phone: z.string().min(10, { message: "Введите корректный номер телефона" }),
  email: z.string().email({ message: "Введите корректный email" }),
  cabin: z.string({ required_error: "Выберите домик" }),
  guests: z.string({ required_error: "Укажите количество гостей" }),
  dates: z.string().min(1, { message: "Выберите даты заезда и выезда" }),
  message: z.string().optional(),
});

export type BookingFormValues = z.infer<typeof bookingFormSchema>;

export const defaultValues: BookingFormValues = {
  name: "",
  phone: "",
  email: "",
  cabin: "",
  guests: "",
  dates: "",
  message: "",
};
