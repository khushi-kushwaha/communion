import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../Components/Nav"

const AddEventForm = ({ onAddEvent }) => {
  const navigate = useNavigate();

  const [eventData, setEventData] = useState({
    title: "",
    category: "",
    event_type: "free",
    start_date: "",
    end_date: "",
    location: "",
    capacity_limit: "",
    price_inr: "",
    description: "",
    image: "", 
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    if (!eventData.title) tempErrors.title = "Title is required";
    if (!eventData.category) tempErrors.category = "Category is required";
    if (!eventData.start_date) tempErrors.start_date = "Start date is required";
    if (!eventData.location) tempErrors.location = "Location is required";
    if (eventData.event_type === "paid" && !eventData.price_inr)
      tempErrors.price_inr = "Price is required for paid events";
    if (!eventData.image) tempErrors.image = "Image URL is required"; 

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      fetch("http://localhost:5000/add-event", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(eventData),
      })
        .then((res) => {
          if (!res.ok) {
            console.log(res.status);
            throw new Error("Failed to add event");
          }
          return res.json();
        })
        .then((data) => {
          console.log("Event added:", data);
          navigate("/"); 
        })
        .catch((err) => console.error("Error adding event:", err));
    }
  };

  return (
    
    <>
    <Nav />
    <div className=" w-full p-20">
      <h2 className="text-5xl font-bold text-black-600">Create a New Event</h2>
      <h2 className="text-3xl mt-4 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#2B7FFF] to-[#66A3FF] drop-shadow-lg tracking-wide">
        Fill in the details to create your event
      </h2>
       <p className="mt-4 text-base text-gray-600">Share the essential details of your event, including the date, location, and key highlights, in the form below. Craft an engaging description to capture your audience's interest and set the stage for a successful launch.</p>

      <form onSubmit={handleSubmit} className="space-y-6 mt-4 bg-gray-200 p-8 rounded-lg w-full">
        <input
          type="text"
          placeholder="Event Title"
          className="w-full border p-2 rounded bg-white"
          value={eventData.title}
          onChange={(e) => setEventData({ ...eventData, title: e.target.value })}
        />
        {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}

        <select
          className="w-full border p-2 rounded bg-white"
          value={eventData.category}
          onChange={(e) => setEventData({ ...eventData, category: e.target.value })}
        >
          <option value="">Select Category</option>
          <option value="Social">Social</option>
          <option value="Charity">Charity</option>
          <option value="Religious">Religious</option>
        </select>
        {errors.category && <p className="text-red-500 text-sm">{errors.category}</p>}

        <input
          type="datetime-local"
          className="w-full border p-2 rounded bg-white"
          value={eventData.start_date}
          onChange={(e) => setEventData({ ...eventData, start_date: e.target.value })}
        />
        {errors.start_date && <p className="text-red-500 text-sm">{errors.start_date}</p>}

        <input
          type="text"
          placeholder="Location"
          className="w-full border p-2 rounded bg-white"
          value={eventData.location}
          onChange={(e) => setEventData({ ...eventData, location: e.target.value })}
        />
        {errors.location && <p className="text-red-500 text-sm">{errors.location}</p>}

        <select
          className="w-full border p-2 rounded bg-white"
          value={eventData.event_type}
          onChange={(e) => setEventData({ ...eventData, event_type: e.target.value })}
        >
          <option value="free">Free</option>
          <option value="paid">Paid</option>
        </select>

        {eventData.event_type === "paid" && (
          <>
            <input
              type="number"
              placeholder="Price in INR"
              className="w-full border p-2 rounded bg-white"
              value={eventData.price_inr}
              onChange={(e) => setEventData({ ...eventData, price_inr: e.target.value })}
            />
            {errors.price_inr && <p className="text-red-500 text-sm">{errors.price_inr}</p>}
          </>
        )}

        <input
          type="text"
          placeholder="Image URL"
          className="w-full border p-2 rounded bg-white"
          value={eventData.image}
          onChange={(e) => setEventData({ ...eventData, image: e.target.value })}
        />
        {errors.image && <p className="text-red-500 text-sm">{errors.image}</p>}

        <textarea
          placeholder="Event Description"
          className="w-full border p-2 rounded bg-white"
          value={eventData.description}
          onChange={(e) => setEventData({ ...eventData, description: e.target.value })}
        ></textarea>

        <div className="">
        <button type="submit" className="mx-auto bg-[#1F2937] text-white px-4 py-2 rounded">
          Create Event
        </button>
        <button onClick={() => navigate("/")} className="mx-auto bg-[#C6C6C7]   px-4 py-2 rounded ml-6">
          Back to Events
        </button>
        </div>
      </form>
    </div>
</>

  );
};

export default AddEventForm;
