import React from "react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
// import countriesData from "./countries.json";
import { Button } from "@/components/ui/button";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";

const countriesData = [
  {
    name: "Afghanistan",
    dial_code: "+93",
    code: "AF",
  },
  {
    name: "Albania",
    dial_code: "+355",
    code: "AL",
  },
  {
    name: "Algeria",
    dial_code: "+213",
    code: "DZ",
  },
  {
    name: "American Samoa",
    dial_code: "+1 684",
    code: "AS",
  },
  {
    name: "Andorra",
    dial_code: "+376",
    code: "AD",
  },
  {
    name: "Angola",
    dial_code: "+244",
    code: "AO",
  },
  {
    name: "Anguilla",
    dial_code: "+1 264",
    code: "AI",
  },
  {
    name: "Antigua and Barbuda",
    dial_code: "+1 268",
    code: "AG",
  },
  {
    name: "Argentina",
    dial_code: "+54",
    code: "AR",
  },
  {
    name: "Armenia",
    dial_code: "+374",
    code: "AM",
  },
  {
    name: "Aruba",
    dial_code: "+297",
    code: "AW",
  },
  {
    name: "Australia",
    dial_code: "+61",
    code: "AU",
  },
  {
    name: "Austria",
    dial_code: "+43",
    code: "AT",
  },
  {
    name: "Azerbaijan",
    dial_code: "+994",
    code: "AZ",
  },
  {
    name: "Bahamas",
    dial_code: "+1 242",
    code: "BS",
  },
  {
    name: "Bahrain",
    dial_code: "+973",
    code: "BH",
  },
  {
    name: "Bangladesh",
    dial_code: "+880",
    code: "BD",
  },
  {
    name: "Barbados",
    dial_code: "+1 246",
    code: "BB",
  },
  {
    name: "Belarus",
    dial_code: "+375",
    code: "BY",
  },
  {
    name: "Belgium",
    dial_code: "+32",
    code: "BE",
  },
];

const CountrySelector = ({ field }: { field: any }) => {
  return (
    <FormItem className="flex flex-col">
      <Popover>
        <PopoverTrigger asChild>
          <FormControl>
            <Button
              variant="outline"
              role="combobox"
              className={cn(
                "w-[100px] justify-between",
                !field.value && "text-muted-foreground"
              )}
            >
              {field.value
                ? countriesData.find(
                    (country) => country.dial_code === field.value
                  )?.dial_code
                : "+1"}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </FormControl>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandInput placeholder="Search country..." />
            <CommandList>
              <CommandEmpty>No country found.</CommandEmpty>
              <CommandGroup>
                {countriesData.map((country) => (
                  <CommandItem
                    value={country.dial_code}
                    key={country.name}
                    disabled={false}
                    onSelect={() => {
                      console.log();
                      console.log(`${field.value} -> ${country.dial_code}`);
                      console.log(`Selected country: ${country.dial_code}`);
                      field.onChange(country.dial_code); // Use field.onChange to update the form value
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        country.dial_code === field.value
                          ? "opacity-100"
                          : "opacity-0"
                      )}
                    />
                    {country.dial_code}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      <FormMessage />
    </FormItem>
  );
};

export default CountrySelector;
