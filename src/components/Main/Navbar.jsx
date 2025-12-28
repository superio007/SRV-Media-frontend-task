import React from "react";
import { useState, useEffect } from "react";
import GradientButton from "../Ui/GradientButton";
import WebsiteLogo from "../../assets/WebsiteLogo.webp";
import { MoveRight } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <>
      {scrolled ? (
        <>
          <header
            className={`
        fixed top-0 left-0 w-full z-50
        transition-all duration-300 ease-in-out
            h-20 bg-linear-to-r from-[#000E38] to-[#3F186A] shadow-lg
      `}
          >
            <div className="container mx-auto h-full xxl:px-25 px-5 flex items-center justify-between">
              {/* Logo */}
              <img
                src={WebsiteLogo}
                alt="Website Logo"
                preload="true"
                className={`
            transition-all duration-300
            w-24
          `}
              />

              <button className="bg-white group flex gap-3 justify-center hover:cursor-pointer items-center px-6 py-4 rounded-md border font-semibold text-[#1e4990]">
                REGISTER NOW <MoveRight strokeWidth={1.2} color="#1e4990" />
              </button>
            </div>
          </header>
        </>
      ) : (
        <>
          <header className="relative bg-white">
            <div className="container mx-auto xxl:px-25 px-5 h-24 flex items-center justify-end">
              <GradientButton />
            </div>

            {/* Floating logo */}
            <img
              src={WebsiteLogo}
              alt="Website Logo"
              preload="true"
              className="absolute xxl:left-[19rem] md:left-10 left-5 top-6 md:w-36 w-26 z-50"
            />
          </header>
        </>
      )}
    </>
  );
};

export default Navbar;
