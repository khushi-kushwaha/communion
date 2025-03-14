import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div
      id="home"
      className="relative min-h-screen flex items-center justify-center text-white overflow-hidden px-4"
    >
      {/* Background Wrapper */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <img
          src="https://media.istockphoto.com/id/649124858/photo/world-management-team-in-office-silhouette.jpg?s=612x612&w=0&k=20&c=s2R8IRTn8pe5ympBbFCRu4eLl3xkjYkgtJzipaVA3RU="
          alt="Background"
          className="absolute w-full h-full object-cover"
        />
      </div>

      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative max-w-lg md:max-w-2xl lg:max-w-3xl text-center flex flex-col items-center">
        <h4 className="text-sm md:text-lg tracking-wide text-gray-300  absolute left-16 md:left-28 lg:left-2">
          Connect
        </h4>
        <h1 className="text-4xl md:text-6xl lg:text-9xl font-light leading-tight mt-2 lg:mt-0">
          Communities
        </h1>
        <p className="text-sm md:text-lg opacity-90 px-2 mt-2">
          Connecting people of all faiths through events and community support
        </p>
        <div className="mt-6 flex justify-center">
          <button
            onClick={() => navigate("/add-event")}
            className="px-6 py-3 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-200 transition"
          >
            + Add Your Event
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
