"use client";
import React from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import CurrencySelector from "./CurrencySelector";

const TripDetails = ({ form }: { form: any }) => {
  const resetFormValues = () => {
    form.reset({
      date: "",
      order_number: "",
      rate_currency: "",
      rate: "",
    });
  };

  return (
    <div className="px-6 bg-zinc-100 py-6 rounded-md ">
      <div className="flex justify-between items-center">
        <h2 className="text-xl pb-8">Trip Details</h2>
        <Button variant="link" onClick={resetFormValues} type="reset">
          Clear
        </Button>
      </div>

      <div className="grid grid-cols-3 gap-5">
        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem className="flex flex-col col-span-1 mt-[11px]">
              <FormLabel className="">Date*</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "  text-left font-normal flex items-center justify-start py-0 px-0",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      <div className="bg-primary px-3 mr-3 flex items-center h-full">
                        <CalendarIcon className=" h-4 w-4 text-white" />
                      </div>
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) => date < new Date("1900-01-01")}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="order_number"
          render={({ field }) => (
            <FormItem className="col-span-1">
              <FormLabel>Order Number*</FormLabel>
              <Input {...field} placeholder="Order Number" />
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="rate"
          render={({ field }) => (
            <FormItem className="col-span-1">
              <FormLabel>Rate*</FormLabel>
              <div className="flex">
                <FormField
                  control={form.control}
                  name="rate_currency"
                  render={({ field }) => <CurrencySelector field={field} />}
                />
                <Input
                  {...field}
                  placeholder="Rate"
                  type="number"
                  onChange={(e) => field.onChange(parseFloat(e.target.value))}
                />
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
};

export default TripDetails;
