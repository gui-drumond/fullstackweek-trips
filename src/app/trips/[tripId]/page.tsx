import { prisma } from '@/lib/prisma'
import React from 'react'

const getTripDetails = async (tripId: string) => {
    return await prisma.trip.findUnique({
        where:{
            id: tripId
        }
    })
}

export default async function TripDetails({params}: { params: { tripId:string }}) {
    const trip = await getTripDetails(params.tripId);
  return (
    <div className='container mx-auto'>Detalhes da {trip?.name}</div>
  )
}
