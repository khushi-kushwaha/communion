import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Event = ({ events }) => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("All");

  const filteredEvents = filter === "All" ? events : events.filter(event => event.category === filter);

  return (
    <section id="events" className="py-16 px-8">
      <h1 className="text-2xl font-bold text-center">
        Beyond Events—Building Communities, Shaping Futures.
      </h1>

      <h2 className="text-xl font-semibold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#2B7FFF] to-[#66A3FF] drop-shadow-lg tracking-wide">
        Upcoming Events
      </h2>

      <div className="text-center space-x-2 mt-8">
        {["All", "Social", "Charity", "Religious"].map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`text-xs font-semibold uppercase px-3 py-1 rounded-full border transition-all ${
              filter === category ? "bg-blue-500 text-white border-blue-500" : "border-gray-500"
            }`}
          >
            {category}
          </button>
        ))}

        <button
          onClick={() => navigate("/add-event")}
          className="text-xs font-semibold uppercase px-3 py-1 rounded-full border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition-all"
        >
          + Add Your Event
        </button>
      </div>

      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {filteredEvents.map((event, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-5 rounded-lg shadow-lg border-l-4 border-blue-500 transition-all hover:shadow-2xl"
          >
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-64 object-cover rounded-md mb-4"
            />

            <span
              className={`text-xs font-semibold uppercase px-3 py-1 rounded-full ${
                event.category === "Charity"
                  ? "bg-green-200 text-green-700"
                  : event.category === "Social"
                  ? "bg-yellow-200 text-yellow-700"
                  : "bg-red-200 text-red-700"
              }`}
            >
              {event.category}
            </span>

            <h3 className="font-bold text-xl text-blue-600 mt-2">{event.title}</h3>

            <p className="text-gray-600 text-sm mt-1">
              📅 {new Date(event.start_date).toLocaleString()} -{" "}
              {new Date(event.end_date).toLocaleString()}
            </p>

            <p className="text-gray-500 text-sm mt-1">📍 {event.location}</p>

            <p className="text-gray-500 text-sm mt-1">
              {event.event_capacity === "unlimited"
                ? "Capacity: Unlimited"
                : `Capacity: ${event.capacity_limit} people`}
            </p>

            {event.event_type === "paid" && event.price_inr && (
              <p className="text-gray-700 font-semibold mt-1">💰 Price: ₹{event.price_inr}</p>
            )}

            <p className="text-gray-600 text-sm mt-2">{event.description}</p>

            {/* Confirm Your Tickets Button */}
            <button className="w-full mt-4 bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition-all">
              Confirm Your Ticket
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Event;
