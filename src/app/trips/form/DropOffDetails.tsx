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

const DropOffDetails = ({
  form,
  currentEntry,
}: {
  form: any;
  currentEntry: number;
}) => {
  const resetFormValues = () => {
    form.reset({
      dropoff_appointment_date: "",
      dropoff_appointment_time: "",
      dropoff_reciever_name: "",
      dropoff_phone: "",
      dropoff_address: "",
      dropoff_street_2: "",
      dropoff_state: "",
      dropoff_city: "",
      dropoff_postal_code: "",
      dropoff_reference: "",
      dropoff_contact_person: "",
      dropoff_commodity: "",
      dropoff_skids: "",
      dropoff_cases: "",
      dropoff_weight: "",
    });
  };

  return (
    <div className="border my-8 mx-4">
      <div className="px-4 py-6 border-b-2 flex justify-between items-center">
        <h3 className="text-xl font-bold">Dropoff Details</h3>
        <Button variant="link" onClick={resetFormValues} type="reset">
          Clear
        </Button>
      </div>
      <div className="px-4 py-9 space-y-8">
        <div className="grid grid-cols-3 gap-5">
          <FormField
            control={form.control}
            name={`otherDetails.${currentEntry}.dropoff_appointment_date`}
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
            name={`otherDetails.${currentEntry}.dropoff_appointment_time`}
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
            name={`otherDetails.${currentEntry}.dropoff_reciever_name`}
            render={({ field }) => (
              <FormItem className="col-span-1">
                <FormLabel>Receiver Name*</FormLabel>
                <Input {...field} placeholder="Receiver Name" />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name={`otherDetails.${currentEntry}.dropoff_phone`}
            render={({ field }) => (
              <FormItem className="col-span-1">
                <FormLabel>Phone*</FormLabel>
                <Input {...field} placeholder="Phone" />
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid grid-cols-3 gap-5">
          <FormField
            control={form.control}
            name={`otherDetails.${currentEntry}.dropoff_address`}
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
            name={`otherDetails.${currentEntry}.dropoff_street_2`}
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
            name={`otherDetails.${currentEntry}.dropoff_state`}
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
            name={`otherDetails.${currentEntry}.dropoff_city`}
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
            name={`otherDetails.${currentEntry}.dropoff_postal_code`}
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
            name={`otherDetails.${currentEntry}.dropoff_reference`}
            render={({ field }) => (
              <FormItem className="col-span-1">
                <FormLabel>Reference</FormLabel>
                <Input {...field} placeholder="Reference" />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name={`otherDetails.${currentEntry}.dropoff_contact_person`}
            render={({ field }) => (
              <FormItem className="col-span-1">
                <FormLabel>Contact Person</FormLabel>
                <Input {...field} placeholder="Contact Person" />
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid grid-cols-3 gap-5">
          <FormField
            control={form.control}
            name={`otherDetails.${currentEntry}.dropoff_commodity`}
            render={({ field }) => (
              <FormItem className="col-span-1">
                <FormLabel>Commodity</FormLabel>
                <Input {...field} placeholder="Commodity" />
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid grid-cols-3 gap-5">
          <FormField
            control={form.control}
            name={`otherDetails.${currentEntry}.dropoff_skids`}
            render={({ field }) => (
              <FormItem className="col-span-1">
                <FormLabel>Skids</FormLabel>
                <Input {...field} placeholder="Skids" />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name={`otherDetails.${currentEntry}.dropoff_cases`}
            render={({ field }) => (
              <FormItem className="col-span-1">
                <FormLabel>Cases</FormLabel>
                <Input {...field} placeholder="Cases" />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name={`otherDetails.${currentEntry}.dropoff_weight`}
            render={({ field }) => (
              <FormItem className="col-span-1">
                <FormLabel>Weight</FormLabel>
                <Input {...field} placeholder="Weight" />
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default DropOffDetails;
