/* eslint-disable @next/next/no-img-element */
'use client';
import React from "react";
import Navbar from "./components/Navbar";
import useAuth from "./hooks/useAuth";
import { auth } from "./firebase/config";
import SignUp from "./sign-up/page";

const MainContent = () => (
  <><main className="py-8 flex flex-col items-center bg-white">
    <section className="mb-8 text-center">
      <h1 className="text-6xl font-bold mb-4 text-black">FIND YOUR NEXT RC CAR OR TRUCK</h1>
      <p className="mb-4 text-black text-2xl">
        Shop our selection of RC cars, trucks, and motorcycles by making your selection below. We’ve got fast RC cars for
        radio control racing, RC monster trucks for stunts and backyard bashing, plus a great selection of other remote
        control vehicles like RC rock crawlers, RC dirt bikes, and mini RC vehicles for indoor and outdoor adventures.
      </p>
      <ul className="flex space-x-4 justify-center">
        <li>
          <a href="#rc-under-200" className="text-black hover:underline bg-white">
            <img
              src="https://www.horizonhobby.com/on/demandware.static/-/Sites-horizon-us-Library/default/dwfe3e599c/images/VisualNav_Mini-RC-Crawlers-360x360.png"
              alt="RC Under $200"
              className="w-96 max-w-screen-md mb-4 rounded bg-yellow-500 mr-12" />
          </a>
        </li>
        <li>
          <a href="#rc-cars" className="text-black hover:underline bg-white">
            <img
           src="https://www.horizonhobby.com/dw/image/v2/BFBR_PRD/on/demandware.static/-/Sites-horizon-master/default/dwf6178b74/Images/LOS/LOS01020T1_A24_29OECQ70.jpg?sw=1600&sh=1600&sm=fit"
          alt="RC Cars"
              className="w-96 max-w-screen-md mb-4 rounded bg-yellow-500 ml-12" />
          </a>
        </li>
        </ul>
    </section>

    <section id="adventure-anywhere" className="mb-8 flex items-center justify-center">
      <div className="flex flex-row items-center justify-between w-full max-w-screen-lg">
        <p className="mb-4 text-left w-1/2 text-black">
          The Axial SCX24 mini RC Crawler offers incredible performance in a convenient size, making any spot the perfect
          setting for RC adventures. Multiple body and upgrade options mean you can make it your own! Shop the full line
          of Axial SCX24 mini RC trucks, replacement parts, optional scale parts, bodies, tires and wheels, and more!
        </p>
        <img
          src="https://www.horizonhobby.com/on/demandware.static/-/Sites-horizon-us-Library/default/dw4464fc13/merch/brand-info/brand-info-axi/SCX24-Lineup-630x340-02.jpg"
          alt="Adventure Anywhere"
          className="w-full max-w-screen-md mb-4 rounded m-4 mx-auto" />
      </div>
    </section>

    <section id="rc-basher-finder" className="mb-8 flex items-center justify-center">
      <div className="flex flex-row items-center justify-between w-full max-w-screen-lg">
        <img
          src="https://www.horizonhobby.com/on/demandware.static/-/Sites-horizon-us-Library/default/dwbbd175ba/merch/promotions/basher-central/basher-central-630x340.jpg"
          alt="RC Basher Finder"
          className="w-full max-w-screen-md mb-4 rounded mx-5" />
        <p className="mb-4 text-left w-1/2 text-black">
          RC driving is often divided into two types: racing and bashing. Racers like rules. For RC bashers, anything goes.
          Almost any RC car or truck can be a basher model, the sturdier the better. Run it fearlessly into the rough,
          through spins and sprints, jumps and wheelies, endurance tests of all kinds…just you and your RC basher against
          the world. If you were born to bash, you come to the right place. Letfind your perfect bashing beast!
        </p>
      </div>
    </section>

    <section id="completion-levels" className="mb-8 text-center">
      <h1 className="text-2xl font-semibold mb-4 text-black">Shop Remote Control Cars by varities</h1>
    </section>
    <section>
      <ul className="flex space-x-4 justify-center">
        <li className="text-green-500">
          <img
            src="https://www.horizonhobby.com/dw/image/v2/BFBR_PRD/on/demandware.static/-/Sites-horizon-master/default/dw99a16400/Images/AXI/AXI05001T1_A14_86KF7BD0.jpg?sw=800&sh=800&sm=fit"
            alt="RTR Vehicles"
            className="w-full max-w-screen-md mb-4 rounded " />
        </li>
        <li className="text-green-500">
          <img
            src="https://www.horizonhobby.com/dw/image/v2/BFBR_PRD/on/demandware.static/-/Sites-horizon-master/default/dwd0346cea/Images/ARA/ARA7116V2_A3_UX6QSB1V.jpg?sw=800&sh=800&sm=fit"
            alt="Roller Vehicles"
            className="w-full max-w-screen-md mb-4 rounded " />
        </li>
        <li className="text-green-500">
          <img
            src="https://www.horizonhobby.com/dw/image/v2/BFBR_PRD/on/demandware.static/-/Sites-horizon-master/default/dwe0e7f34f/Images/ARA/ARA102727_A5_8K0Y8R2G.jpg?sw=800&sh=800&sm=fit"
            alt="Kit Vehicles"
            className="w-full max-w-screen-md mb-4 rounded " />
        </li>
      </ul>
    </section>
  </main>
    <footer className="bg-yellow-500 text-blue-800 py-8 flex flex-col items-center">
      <div className="w-full max-w-screen-lg">
        {/* First Section: About the company */}
        <section className="mb-8 text-center">
          <p className="mb-4">
            Our personal goal is to inspire dreams and build memories. We take pride in providing the best hobby store
            experience for our customers, whether that’s online, at RC events, or in the RC community with RC cars, RC
            planes, RC boats, and so much more.
          </p>
          <p className="mb-4">
            Our promise to our customers is creating one-of-a-kind experiences that keep you coming back for more. We are
            more than an online hobby store. Our RC cars and trucks, RC airplanes and helicopters, and other radio control
            products are with you at home, on the go, and with your friends. We bring the fun.
          </p>
        </section>

        {/* Second Section: Policies */}
        <section className="mb-8 text-center">
          <h4 className="text-lg font-semibold mb-4">Our policies are top notch:</h4>
          <ul className="list-disc pl-5 inline-block text-left">
            <li>Same Day Shipping</li>
            <li>Free Shipping Over $99</li>
            <li>Expert Product Support</li>
            <li>Easy Returns</li>
          </ul>
        </section>

        
        <p className="text-center">Copyright 2024 &copy; Horizon Hobby.</p>
      </div>
    </footer></>
    
);

export default function Home() {
  const { user, loading } = useAuth();

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen text-white">Loading...</div>;
  }

  return (
    user ? (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow bg-[#1f1e1e]">
          <MainContent />
        </main>
      </div>
    ) : (
      <div >
        <SignUp/>
      </div>
    )
  );
}