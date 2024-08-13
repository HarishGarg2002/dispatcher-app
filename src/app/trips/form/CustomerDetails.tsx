"use client";
import React from "react";
import {
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const CustomerDetails = ({ form }: { form: any }) => {
  const resetFormValues = () => {
    form.reset({
      customer_name: "",
      customer_phone: "",
      customer_address: "",
      customer_street_2: "",
      customer_state: "",
      customer_city: "",
      customer_postal_code: "",
    });
  };

  return (
    <div className="px-4 py-4 pt-8 rounded-md ">
      <div className="flex justify-between items-center">
        <h2 className="text-xl pb-4 font-semibold">Customer Details</h2>
        <Button variant="link" onClick={resetFormValues} type="reset">
          Clear
        </Button>
      </div>
      <div className="space-y-8">
        <div className="grid grid-cols-3 gap-5 ">
          <FormField
            control={form.control}
            name="customer_name"
            render={({ field }) => (
              <FormItem className="flex flex-col col-span-1 mt-[11px]">
                <FormLabel htmlFor="customer_name">Name*</FormLabel>
                <Input {...field} id="customer_name" placeholder="John Doe" />
                <FormMessage {...field} />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="customer_phone"
            render={({ field }) => (
              <FormItem className="flex flex-col col-span-1 mt-[11px]">
                <FormLabel htmlFor="customer_phone">Phone*</FormLabel>
                {/* <div className="flex">
                    <FormField
                      control={form.control}
                      name="customer_country_code"
                      render={({ field }) => <CountrySelector field={field} />}
                    /> */}

                <Input
                  {...field}
                  id="customer_phone"
                  placeholder="1234567890"
                />
                {/* </div> */}
                <FormMessage {...field} />
              </FormItem>
            )}
          />
        </div>
        <div className="grid grid-cols-3 gap-5">
          <FormField
            control={form.control}
            name="customer_address"
            render={({ field }) => (
              <FormItem className="flex flex-col col-span-1 mt-[11px]">
                <FormLabel htmlFor="customer_address">Address*</FormLabel>
                <Input
                  {...field}
                  id="customer_address"
                  placeholder="123 Main St"
                />
                <FormMessage {...field} />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="customer_street_2"
            render={({ field }) => (
              <FormItem className="flex flex-col col-span-1 mt-[11px]">
                <FormLabel htmlFor="customer_street_2">Street 2</FormLabel>
                <Input
                  {...field}
                  id="customer_street_2"
                  placeholder="Apt 123"
                />
                <FormMessage {...field} />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="customer_state"
            render={({ field }) => (
              <FormItem className="flex flex-col col-span-1 mt-[11px]">
                <FormLabel htmlFor="customer_state">State*</FormLabel>
                <Input {...field} id="customer_state" placeholder="CA" />
                <FormMessage {...field} />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-3 gap-5">
          <FormField
            control={form.control}
            name="customer_city"
            render={({ field }) => (
              <FormItem className="flex flex-col col-span-1 mt-[11px]">
                <FormLabel htmlFor="customer_city">City*</FormLabel>
                <Input
                  {...field}
                  id="customer_city"
                  placeholder="San Francisco"
                />
                <FormMessage {...field} />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="customer_postal_code"
            render={({ field }) => (
              <FormItem className="flex flex-col col-span-1 mt-[11px]">
                <FormLabel htmlFor="customer_postal_code">
                  Postal Code*
                </FormLabel>
                <Input
                  {...field}
                  id="customer_postal_code"
                  placeholder="A1A 1A1"
                />
                <FormMessage {...field} />
              </FormItem>
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default CustomerDetails;
