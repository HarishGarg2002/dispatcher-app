"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import TripDetails from "./form/TripDetails";
import CustomerDetails from "./form/CustomerDetails";
import PickupDetails from "./form/PickupDetails";
import DropOffDetails from "./form/DropOffDetails";
import HighwayDispatch from "./form/HighwayDispatch";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import BottomComponent from "./form/BottomComponent";
import { useToast } from "@/components/ui/use-toast";

export const addTripSchema = z.object({
  date: z.date(),
  order_number: z.string(),
  rate_currency: z.enum(["CAD", "USD"]),
  rate: z.number(),
  customer_name: z.string(),
  //   customer_country_code: z.string(),
  customer_phone: z.string().regex(/^\d{10}$/),
  customer_address: z.string(),
  customer_street_2: z.string().optional(),
  customer_state: z.string(),
  customer_city: z.string(),
  customer_postal_code: z.string(),

  otherDetails: z.array(
    z.object({
      pickup_appointment_date: z.date(),
      pickup_appointment_time: z.string(),
      pickup_shipper_name: z.string(),
      pickup_phone: z.string().regex(/^\d{10}$/),
      pickup_address: z.string(),
      pickup_street_2: z.string().optional(),
      pickup_state: z.string(),
      pickup_city: z.string(),
      pickup_postal_code: z.string(),
      pickup_pickup_number: z.string(),
      pickup_contact_person: z.string(),
      pickup_commodity: z.string(),
      pickup_temperature: z.number(),
      pickup_skids: z.number(),
      pickup_cases: z.number(),
      pickup_weight: z.number(),
      dropoff_appointment_date: z.date(),
      dropoff_appointment_time: z.string(),
      dropoff_reciever_name: z.string(),
      dropoff_phone: z.string().regex(/^\d{10}$/),
      dropoff_address: z.string(),
      dropoff_street_2: z.string().optional(),
      dropoff_state: z.string(),
      dropoff_city: z.string(),
      dropoff_postal_code: z.string(),
      dropoff_reference: z.string().optional(),
      dropoff_contact_person: z.string().optional(),
      dropoff_commodity: z.string().optional(),
      dropoff_skids: z.number().optional(),
      dropoff_cases: z.number().optional(),
      dropoff_weight: z.number().optional(),
      dispatch_driver: z.string().optional(),
      dispatch_codriver: z.string().optional(),
      dispatch_truck_id: z.string().optional(),
      dispatch_trailer_id: z.string().optional(),
      dispatch_carrier: z.string().optional(),
      dispatch_trailer_type: z.string().optional(),
      dispatch_rate: z.number().optional(),
    })
  ),
});

export type addTripFormValues = z.infer<typeof addTripSchema>;

const AddTripForm = () => {
  const form = useForm<addTripFormValues>({
    resolver: zodResolver(addTripSchema),
  });

  // const [formData]

  const { toast } = useToast();

  const onSubmit = (values: addTripFormValues) => {
    console.log(values);
    toast({
      title: "Trip Added",
      description: "Trip has been added successfully",
    });
  };

  const [currentEntry, setCurrentEntry] = useState(0);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="my-12">
          <TripDetails form={form} />
          <CustomerDetails form={form} />
          <BottomComponent form={form} currentEntry={currentEntry} />
        </div>
      </form>
    </Form>
  );
};

export default AddTripForm;
