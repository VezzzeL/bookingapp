import React, { useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { Perks } from "../Perks";
import axios from "axios";
import { PhotosUploader } from "../PhotosUploader";

export const PlacesPage = () => {
  const { action } = useParams();
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [addedPhotos, setAddedPhotos] = useState([]);
  const [perks, setPerks] = useState([]);
  const [extraInfo, setExtraInfo] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [maxGuest, setMaxGuest] = useState(1);
  const [redirectToPlaceList, setRedirectToPlaceList] = useState(false);
  function inputHeader(text) {
    return <h2 className="text-2xl mt-4">{text}</h2>;
  }
  function inputDescription(text) {
    return <p className="text-gray-500 text-sm">{text}</p>;
  }
  function preInput(header, description) {
    return (
      <>
        {inputHeader(header)}
        {inputDescription(description)}
      </>
    );
  }
  async function addNewPlace(ev) {
    ev.preventDefault();
    axios.post("/places", {
      title,
      address,
      addedPhotos,
      description,
      perks,
      extraInfo,
      checkIn,
      checkOut,
      maxGuest,
    });
    setRedirectToPlaceList(true);
  }
  if (redirectToPlaceList && action !== "new") {
    return <Navigate to={"/account/places"} />;
  }
  return (
    <div>
      {action !== "new" && (
        <div className="text-center">
          <Link
            className="inline-flex gap-1 bg-primary text-white py-2 px-4 rounded-full"
            to={"/account/places/new"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            Add new places
          </Link>
        </div>
      )}
      {action === "new" && (
        <div>
          <form onSubmit={addNewPlace}>
            {preInput("Title", "Title for service")}
            <input
              type="text"
              value={title}
              onChange={(ev) => setTitle(ev.target.value)}
              placeholder="title"
            />
            {preInput("Address", "Where")}
            <input
              type="text"
              value={address}
              onChange={(ev) => setAddress(ev.target.value)}
              placeholder="address"
            />
            {preInput("Photos", "More = better")}
            <PhotosUploader
              addedPhotos={addedPhotos}
              onChange={setAddedPhotos}
            />
            {preInput("Description", "Describe")}
            <textarea
              value={description}
              onChange={(ev) => setDescription(ev.target.value)}
            />
            {preInput("Perks", "Add your perks")}
            <div className="grid mt-2 gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
              <Perks selected={perks} onChange={setPerks} />
            </div>
            {preInput("Extra info", "rules, etc")}
            <textarea
              value={extraInfo}
              onChange={(ev) => setExtraInfo(ev.target.value)}
            />
            {preInput("Check in/out time", "add check in and check out time")}
            <div className="grid gap-2 sm:grid-cols-3">
              <div className="mt-2 -mb-1">
                <h3>Check in time</h3>
                <input
                  type="text"
                  value={checkIn}
                  onChange={(ev) => setCheckIn(ev.target.value)}
                  placeholder="16:00"
                />
              </div>
              <div className="mt-2 -mb-1">
                <h3>Check out time</h3>
                <input
                  type="text"
                  value={checkOut}
                  onChange={(ev) => setCheckOut(ev.target.value)}
                  placeholder="17:00"
                />
              </div>
              <div className="mt-2 -mb-1">
                <h3>Max guests</h3>
                <input
                  type="number"
                  value={maxGuest}
                  onChange={(ev) => setMaxGuest(ev.target.value)}
                  placeholder="0"
                />
              </div>
            </div>
            <button className="primary my-4">Save</button>
          </form>
        </div>
      )}
    </div>
  );
};
