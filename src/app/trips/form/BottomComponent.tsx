"use client";

import TripDetails from "../form/TripDetails";
import CustomerDetails from "../form/CustomerDetails";
import PickupDetails from "../form/PickupDetails";
import DropOffDetails from "../form/DropOffDetails";
import HighwayDispatch from "../form/HighwayDispatch";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { addTripFormValues } from "../AddTripForm";
import { Button } from "@/components/ui/button";

const BottomComponent = ({
  form,
  currentEntry,
}: {
  form: any;
  currentEntry: number;
}) => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      name: "Pickup Details",
      component: <PickupDetails form={form} currentEntry={currentEntry} />,
    },
    {
      name: "Dropoff Details",
      component: <DropOffDetails form={form} currentEntry={currentEntry} />,
    },
    {
      name: "Highway Dispatch",
      component: <HighwayDispatch form={form} currentEntry={currentEntry} />,
    },
  ];
  return (
    <div className="">
      {steps[currentStep].component}

      <div className="my-6 flex justify-between px-4">
        <div>
          <Button
            onClick={() => {
              if (currentStep > 0) {
                setCurrentStep(currentStep - 1);
              }
            }}
            type="button"
            className={cn(currentStep === 0 && "invisible")}
          >
            <ArrowLeftIcon className="mr-2" />
            {steps[currentStep ? currentStep - 1 : 0].name}
          </Button>
        </div>
        <div>
          {Array.from({ length: steps.length }, (_, i) => (
            <Button
              key={i}
              onClick={() => {
                setCurrentStep(i);
              }}
              className={`mx-2 ${
                i === currentStep ? "bg-blue-500 text-white" : ""
              }`}
              type="button"
            >
              {i + 1}
            </Button>
          ))}
        </div>
        <div>
          <Button
            onClick={() => {
              if (currentStep < steps.length - 1) {
                setCurrentStep(currentStep + 1);
              }
            }}
            className={cn(currentStep === steps.length - 1 && "hidden")}
            type="button"
          >
            {steps[currentStep !== 2 ? currentStep + 1 : currentStep].name}
            <ArrowRightIcon className="ml-2" />
          </Button>
          {currentStep === steps.length - 1 && (
            <Button type="submit" className="bg-primary text-white">
              Finish
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BottomComponent;
