import React from "react";

const BodyImage = () => {
  return (
    <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 bg-img">
      <img
        className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
        src="https://ik.imagekit.io/bayc/assets/mystery-ape.gif"
        alt=""
      />
    </div>
  );
};

export default BodyImage;
