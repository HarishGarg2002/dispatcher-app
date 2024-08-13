import { Button } from "@/components/ui/button";
import { FormControl, FormItem, FormMessage } from "@/components/ui/form";
import { cn } from "@/lib/utils";

const CurrencySelector = ({ field }: { field: any }) => {
  return (
    <FormItem className="">
      <FormControl className="flex items-center">
        <div className="flex">
          {["CAD", "USD"].map((currency) => (
            <Button
              key={currency}
              type="button"
              variant={field.value === currency ? "default" : "outline"}
              onClick={() => field.onChange(currency)}
              className={cn(
                "text-left font-normal flex items-center justify-start py-0 px-3",
                field.value === currency && "bg-primary text-white"
              )}
            >
              {currency}
            </Button>
          ))}
        </div>
      </FormControl>
      <FormMessage />
    </FormItem>
  );
};

export default CurrencySelector;
