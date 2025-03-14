import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Background Wrapper */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <img
          src="https://media.istockphoto.com/id/649124858/photo/world-management-team-in-office-silhouette.jpg?s=612x612&w=0&k=20&c=s2R8IRTn8pe5ympBbFCRu4eLl3xkjYkgtJzipaVA3RU="
          alt="Background"
          className="absolute w-auto h-full min-w-screen min-h-screen object-cover"
        />
      </div>

      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative max-w-3xl text-center">
        <h4 className="text-lg  tracking-wide text-gray-300 absolute ">
          Connect
        </h4>
        <h1 className="text-9xl font-light  leading-tight">Communities</h1>
        <p className="text-lg  opacity-90">
          Connecting people of all faiths through events and community support
        </p>
        <button 
         onClick={() => navigate("/add-event")} className="mt-6 px-6 py-3 bg-white text-gray-900 font-semibold rounded-full  hover:bg-gray-200 transition absolute -right-10">
        + Add Your Event
        </button>
      </div>
    </div>
  );
};

export default Hero;
