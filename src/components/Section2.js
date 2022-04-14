import React from "react";

const Section2 = () => {
  return (
    <div>
      <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div className="sm:text-center lg:text-left">
          <h1 className="text-4xl tracking-tight font-extrabold text-lime-600 sm:text-5xl md:text-6xl">
            <span className="block xl:inline">WELCOME TO THE</span>{" "}
            <span className="block text-lime-600 xl:inline">
              BORED APE YACHT CLUB
            </span>
          </h1>
          <p className="mt-3 text-base text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            BAYC is a collection of 10,000 Bored Ape NFTs—unique digital
            collectibles living on the Ethereum blockchain. Your Bored Ape
            doubles as your Yacht Club membership card, and grants access to
            members-only benefits, the first of which is access to THE BATHROOM,
            a collaborative graffiti board. Future areas and perks can be
            unlocked by the community through roadmap activation.
          </p>
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
              <a
                href="https://opensea.io/collection/boredapeyachtclub"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-lime-600 bg-black hover:bg-lime-300 md:py-4 md:text-lg md:px-10"
              >
                BUY ON OPENSEA
              </a>
            </div>
            {/* <div className="mt-3 sm:mt-0 sm:ml-3">
              <a
                href="#"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-lime-600 bg-black hover:bg-lime-300 md:py-4 md:text-lg md:px-10"
              >
                Connect Wallet
              </a>
            </div> */}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Section2;
