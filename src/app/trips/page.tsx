import React from "react";
import AddTripForm from "./AddTripForm";

const page = () => {
  return (
    <div className="py-12 px-10 text-gray-700">
      <h1 className="text-3xl font-bold">Create a trip</h1>
      <AddTripForm />
    </div>
  );
};

export default page;
