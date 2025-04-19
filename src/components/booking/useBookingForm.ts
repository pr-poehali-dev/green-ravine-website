import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { bookingFormSchema, BookingFormValues, defaultValues } from "./BookingSchema";

export function useBookingForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<BookingFormValues>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues,
  });

  const handleSubmit = (data: BookingFormValues) => {
    console.log("Данные бронирования:", data);
    setIsSubmitted(true);
    // В реальном сценарии здесь был бы запрос к API
  };

  const resetForm = () => {
    setIsSubmitted(false);
    form.reset(defaultValues);
  };

  return {
    form,
    isSubmitted,
    handleSubmit,
    resetForm,
  };
}
