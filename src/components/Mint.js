import React from "react";

const Mint = () => {
  return (
    <div className="flex justify-evenly">
      <div className="py-16 justify-center my-8 mx-8 items-center">
        <div>
          <h1 className="text-white text-2xl font-semibold">
            TOTAL SUPPLY: 10000 <br></br>AMOUNT MINTED: 200/10000 <br></br>
            AMOUNT REMAINING: 9800 <br></br>
          </h1>
          <h1 className="text-red-600 text-2xl font-bold">
            CONNECT WALLET AT TOP OF PAGE.
          </h1>
        </div>
        <div className="mt-3 sm:mt-0 sm:ml-3">
          <a
            href="#"
            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-lime-600 bg-black hover:bg-lime-300 md:py-4 md:text-lg md:px-10"
          >
            MINT
          </a>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-y-4 py-8">
        <div>
          <img
            className="w-40 pl-3.5 col-6"
            src="https://ik.imagekit.io/bayc/assets/ape1.png"
          />
        </div>
        <div>
          <img
            className="w-40 pl-3.5 col-6"
            src="https://ik.imagekit.io/bayc/assets/ape2.png"
          />
        </div>
        <div>
          <img
            className="w-40 pl-3.5 col-6"
            src="https://ik.imagekit.io/bayc/assets/ape3.png"
          />
        </div>
        <div>
          <img
            className="w-40 pl-3.5 col-6"
            src="https://ik.imagekit.io/bayc/assets/ape4.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Mint;
