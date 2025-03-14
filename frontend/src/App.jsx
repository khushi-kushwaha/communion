import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import AddEventForm from "./Components/AddEventForm";
import Start from "./Components/Start";

const Root = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/data")
      .then((res) => res.json())
      .then((json) => setEvents(json))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  const handleAddEvent = (newEvent) => {
    setEvents((prevEvents) => [...prevEvents, newEvent]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Start events={events} />} />
        <Route path="/add-event" element={<AddEventForm onAddEvent={handleAddEvent} />} />
      </Routes>
    </Router>
  );
};

export default Root;

