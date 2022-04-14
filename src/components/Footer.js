import React from "react";

const footer = () => {
  return (
    <div
      className="w-full h-screen bg-cover bg-fixed filter blur-sm"
      style={{
        backgroundImage: `url("https://ik.imagekit.io/bayc/assets/bayc-mutant-hero.jpg")`,
      }}
    >
      <h4 className="text-center text-lime-400 text-2xl">
        THE TEAM BAYC was created by four friends who set out to make some dope
        apes, test our skills, and try to build something (ridiculous).
        GARGAMEL. STARCRAFT OBSESSED. EATS SMURFS. GORDON GONER. REFORMED
        LEVERAGE ADDICT. EMPEROR TOMATO KETCHUP. SPENT ALL THEIR MONEY ON FIRST
        PRESSES AND PET-NAT. NO SASS. HERE FOR THE APES. NOT FOR THE SASS.
      </h4>
    </div>
  );
};

export default footer;
