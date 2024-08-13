"use client";

import React, { useState } from "react";

import { FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const HighwayDispatch = ({
  form,
  currentEntry,
}: {
  form: any;
  currentEntry: number;
}) => {
  const resetFormValues = () => {
    form.reset({
      dispatch_driver: "",
      dispatch_codriver: "",
      dispatch_truck_id: "",
      dispatch_trailer_id: "",
      dispatch_carrier: "",
      dispatch_trailer_type: "",
      dispatch_rate: "",
    });
  };

  return (
    <div className="border my-8 mx-4">
      <div className="px-4 py-6 border-b-2 flex justify-between items-center">
        <h3 className="text-xl font-bold">Highway Dispatch</h3>
        <Button variant="link" onClick={resetFormValues} type="reset">
          Clear
        </Button>
      </div>
      <div className="px-4 py-9 space-y-8">
        <div className="grid grid-cols-3 gap-5">
          <FormField
            control={form.control}
            name={`other[${currentEntry}].dispatch_driver`}
            render={({ field }) => (
              <FormItem className="flex flex-col col-span-1 mt-[11px]">
                <FormLabel htmlFor="dispatch_driver">Driver</FormLabel>
                <Input {...field} id="dispatch_driver" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name={`other[${currentEntry}].dispatch_codriver`}
            render={({ field }) => (
              <FormItem className="flex flex-col col-span-1 mt-[11px]">
                <FormLabel htmlFor="dispatch_codriver">Co-Driver</FormLabel>
                <Input {...field} id="dispatch_codriver" />
              </FormItem>
            )}
          />
        </div>
        <div className="grid grid-cols-3 gap-5">
          <FormField
            control={form.control}
            name={`other[${currentEntry}].dispatch_truck_id`}
            render={({ field }) => (
              <FormItem className="flex flex-col col-span-1 mt-[11px]">
                <FormLabel htmlFor="dispatch_truck_id">Truck ID</FormLabel>
                <Input {...field} id="dispatch_truck_id" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name={`other[${currentEntry}].dispatch_trailer_id`}
            render={({ field }) => (
              <FormItem className="flex flex-col col-span-1 mt-[11px]">
                <FormLabel htmlFor="dispatch_trailer_id">Trailer ID</FormLabel>
                <Input {...field} id="dispatch_trailer_id" />
              </FormItem>
            )}
          />
        </div>
        <div className="grid grid-cols-3 gap-5">
          <FormField
            control={form.control}
            name={`other[${currentEntry}].dispatch_carrier`}
            render={({ field }) => (
              <FormItem className="flex flex-col col-span-1 mt-[11px]">
                <FormLabel htmlFor="dispatch_carrier">Carrier</FormLabel>
                <Input {...field} id="dispatch_carrier" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name={`other[${currentEntry}].dispatch_trailer_type`}
            render={({ field }) => (
              <FormItem className="flex flex-col col-span-1 mt-[11px]">
                <FormLabel htmlFor="dispatch_trailer_type">
                  Trailer Type
                </FormLabel>
                <Input {...field} id="dispatch_trailer_type" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name={`other[${currentEntry}].dispatch_rate`}
            render={({ field }) => (
              <FormItem className="flex flex-col col-span-1 mt-[11px]">
                <FormLabel htmlFor="dispatch_rate">Rate</FormLabel>
                <Input {...field} id="dispatch_rate" />
              </FormItem>
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default HighwayDispatch;
