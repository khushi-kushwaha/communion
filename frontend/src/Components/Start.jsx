import React from "react";
import Nav from "../Components/Nav"
import Event from "../Components/Event"
import Hero from "./Hero";
const Start = ({ events }) => {
  return (
    <div>
      <Nav />
      <Hero />
      <Event events={events} />
    </div>
  );
};

export default Start;
