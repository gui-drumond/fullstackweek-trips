import React from "react";
import TripItem from "@/components/TripItem";
import { Trip } from "@prisma/client";
import { prisma } from "@/lib/prisma";


async function getTrips(){
  return await prisma.trip.findMany({});
  
}

export default async function RecommendedTrips(){

  const data = await getTrips();
  return (
    <div className="container mx-auto p-5">
    <div className="flex items-center">
      <div className="w-full h-[1px] bg-grayLighter"></div>
      <h2 className="px-5 font-medium text-grayPrimary whitespace-nowrap">Destinos Recomendados</h2>
      <div className="w-full h-[1px] bg-grayLighter"></div>
    </div>

    <div className="flex flex-col items-center mt-5 gap-5">
      {data.map((trip: Trip) => (
        <TripItem key={trip.id} trip={trip} />
      ))}
    </div>
  </div>
  );
}