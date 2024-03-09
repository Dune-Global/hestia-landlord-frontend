import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/common/buttons/button";

function PendingProperties() {
  return (
    <div>
      <div className="flex items-center md:items-start justify-center md:justify-between flex-col md:flex-row gap-4">
        <div className="flex flex-col gap-4">
          <div className="text-2xl md:text-4xl font-bold">Pending properties.</div>
          <div className="text-xs md:text-sm">
            Check below to see which of your properties are still pending
          </div>
        </div>
        <div className="flex gap-4">
          <div>
            <Input placeholder="Search properties...      " />
          </div>
          <div>
            <Button variant="fillBlack">Search</Button>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default PendingProperties;
