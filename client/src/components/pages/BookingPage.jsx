import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { AddressLink } from "../AddressLink";
import { PlacesGallery } from "../PlacesGallery";
import { BookingDates } from "../BookingDates";
export const BookingPage = () => {
  const { id } = useParams();
  const [booking, setBooking] = useState(null);
  useEffect(() => {
    if (id) {
      axios.get("/bookings").then((response) => {
        const foundBooking = response.data.find(({ _id }) => _id === id);
        if (foundBooking) {
          setBooking(foundBooking);
        }
      });
    }
  }, [id]);

  if (!booking) {
    return "";
  }
  return (
    <div className="my-8">
      <h1 className="text-3xl">{booking.place.title}</h1>
      <AddressLink className="my-2 block">{booking.place.address}</AddressLink>
      <div className="bg-gray-200 p-4 my-6 rounded-2xl flex items-center justify-between">
        <h2 className="text-xl mb-4">Your booking info:</h2>
        <BookingDates booking={booking} />

        <div className="bg-primary p-4 text-white rounded-2xl">
          <span className="text-xl">Price: ${booking.place.price}</span>
        </div>
      </div>
      <PlacesGallery place={booking.place} />
    </div>
  );
};
