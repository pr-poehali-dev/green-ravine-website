import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { UseFormReturn } from "react-hook-form";
import { BookingFormValues } from "./BookingSchema";
import { cabins } from "@/lib/constants";

interface BookingDetailsFieldsProps {
  form: UseFormReturn<BookingFormValues>;
}

/**
 * Компонент с полями выбора домика, гостей и дат
 */
const BookingDetailsFields = ({ form }: BookingDetailsFieldsProps) => {
  // Функция для определения правильного склонения слова "гость"
  const getGuestWordForm = (num: number): string => {
    if (num === 1) return "гость";
    if (num > 1 && num < 5) return "гостя";
    return "гостей";
  };

  return (
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
                    {num} {getGuestWordForm(num)}
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
  );
};

export default BookingDetailsFields;
