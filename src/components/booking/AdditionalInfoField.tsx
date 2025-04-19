import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { UseFormReturn } from "react-hook-form";
import { BookingFormValues } from "./BookingSchema";

interface AdditionalInfoFieldProps {
  form: UseFormReturn<BookingFormValues>;
}

const AdditionalInfoField = ({ form }: AdditionalInfoFieldProps) => {
  return (
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
  );
};

export default AdditionalInfoField;
