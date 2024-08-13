"use client";
import React from "react";

import { Button } from "@/components/ui/button";
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
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

import { Calendar } from "@/components/ui/calendar";

const PickupDetails = ({
  form,
  currentEntry,
}: {
  form: any;
  currentEntry: number;
}) => {
  const resetFormValues = () => {
    form.reset({
      pickup_appointment_date: "",
      pickup_appointment_time: "",
      pickup_shipper_name: "",
      pickup_phone: "",
      pickup_address: "",
      pickup_street_2: "",
      pickup_state: "",
      pickup_city: "",
      pickup_postal_code: "",
      pickup_pickup_number: "",
      pickup_contact_person: "",
      pickup_commodity: "",
      pickup_temperature: 0,
      pickup_skids: 0,
      pickup_cases: 0,
      pickup_weight: 0,
    });
  };

  return (
    <div className="border my-8 mx-4">
      <div className="px-4 py-6 border-b-2 flex justify-between items-center">
        <h3 className="text-xl font-bold">Pickup Details</h3>
        <Button variant="link" onClick={resetFormValues} type="reset">
          Clear
        </Button>
      </div>
      <div className="px-4 py-9 space-y-8">
        <div className="grid grid-cols-3 gap-5">
          <FormField
            control={form.control}
            name={`otherDetails.${currentEntry}.pickup_appointment_date`}
            render={({ field }) => (
              <FormItem className="flex flex-col col-span-1">
                <FormLabel className="">Appointment Date*</FormLabel>
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
            name={`otherDetails.${currentEntry}.pickup_appointment_time`}
            render={({ field }) => (
              <FormItem className="flex flex-col col-span-1">
                <FormLabel className="">Appointment Time*</FormLabel>
                <Input {...field} type="time" />
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid grid-cols-3 gap-5">
          <FormField
            control={form.control}
            name={`otherDetails.${currentEntry}.pickup_shipper_name`}
            render={({ field }) => (
              <FormItem className="col-span-1">
                <FormLabel>Shipper Name*</FormLabel>
                <Input {...field} placeholder="Shipper Name" />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name={`otherDetails.${currentEntry}.pickup_phone`}
            render={({ field }) => (
              <FormItem className="col-span-1">
                <FormLabel>Phone*</FormLabel>
                <Input {...field} placeholder="Phone" type="tel" />
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid grid-cols-3 gap-5">
          <FormField
            control={form.control}
            name={`otherDetails.${currentEntry}.pickup_address`}
            render={({ field }) => (
              <FormItem className="col-span-1">
                <FormLabel>Address*</FormLabel>
                <Input {...field} placeholder="Address" />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name={`otherDetails.${currentEntry}.pickup_street_2`}
            render={({ field }) => (
              <FormItem className="col-span-1">
                <FormLabel>Street 2</FormLabel>
                <Input {...field} placeholder="Street 2" />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name={`otherDetails.${currentEntry}.pickup_state`}
            render={({ field }) => (
              <FormItem className="col-span-1">
                <FormLabel>State*</FormLabel>
                <Input {...field} placeholder="State" />
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid grid-cols-3 gap-5">
          <FormField
            control={form.control}
            name={`otherDetails.${currentEntry}.pickup_city`}
            render={({ field }) => (
              <FormItem className="col-span-1">
                <FormLabel>City*</FormLabel>
                <Input {...field} placeholder="City" />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name={`otherDetails.${currentEntry}.pickup_postal_code`}
            render={({ field }) => (
              <FormItem className="col-span-1">
                <FormLabel>Postal Code*</FormLabel>
                <Input {...field} placeholder="Postal Code" />
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid grid-cols-3 gap-5">
          <FormField
            control={form.control}
            name={`otherDetails.${currentEntry}.pickup_pickup_number`}
            render={({ field }) => (
              <FormItem className="col-span-1">
                <FormLabel>Pickup Number*</FormLabel>
                <Input {...field} placeholder="Pickup Number" />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name={`otherDetails.${currentEntry}.pickup_contact_person`}
            render={({ field }) => (
              <FormItem className="col-span-1">
                <FormLabel>Contact Person*</FormLabel>
                <Input {...field} placeholder="Contact Person" />
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid grid-cols-3 gap-5">
          <FormField
            control={form.control}
            name={`otherDetails.${currentEntry}.pickup_commodity`}
            render={({ field }) => (
              <FormItem className="col-span-1">
                <FormLabel>Commodity*</FormLabel>
                <Input {...field} placeholder="Commodity" />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name={`otherDetails.${currentEntry}.pickup_temperature`}
            render={({ field }) => (
              <FormItem className="col-span-1">
                <FormLabel>Temperature*</FormLabel>
                <Input
                  {...field}
                  placeholder="Temperature"
                  onChange={(e) => field.onChange(parseFloat(e.target.value))}
                />
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid grid-cols-3 gap-5">
          <FormField
            control={form.control}
            name={`otherDetails.${currentEntry}.pickup_skids`}
            render={({ field }) => (
              <FormItem className="col-span-1">
                <FormLabel>Skids*</FormLabel>
                <Input
                  {...field}
                  placeholder="Skids"
                  onChange={(e) => field.onChange(parseFloat(e.target.value))}
                />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name={`otherDetails.${currentEntry}.pickup_cases`}
            render={({ field }) => (
              <FormItem className="col-span-1">
                <FormLabel>Cases*</FormLabel>
                <Input
                  {...field}
                  placeholder="Cases"
                  onChange={(e) => field.onChange(parseFloat(e.target.value))}
                />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name={`otherDetails.${currentEntry}.pickup_weight`}
            render={({ field }) => (
              <FormItem className="col-span-1">
                <FormLabel>Weight*</FormLabel>
                <Input
                  {...field}
                  placeholder="Weight"
                  onChange={(e) => field.onChange(parseFloat(e.target.value))}
                />
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default PickupDetails;
