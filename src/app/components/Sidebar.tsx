"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LayoutDashboard, Truck } from "lucide-react";
import { cn } from "@/lib/utils";
const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="basis-1/6 bg-primary  text-white pt-8">
      <div className="text-2xl font-bold tracking-wide pl-6">Dispatcher.ca</div>
      <div className="pt-12 px-2 space-y-1">
        <Link
          href="/"
          className={cn(
            "w-full pl-6 hover:bg-black/50 rounded-md py-3 flex items-center",
            {
              "bg-black/50": pathname === "/",
            }
          )}
        >
          <LayoutDashboard className="w-5 h-5  mr-3" />
          Dashboard
        </Link>
        <Link
          href="/trips"
          className={cn(
            "w-full pl-6 hover:bg-black/50 rounded-md py-3 flex items-center",
            {
              "bg-black/50": pathname === "/trips",
            }
          )}
        >
          <Truck className="w-5 h-5  mr-3" />
          Trips
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
