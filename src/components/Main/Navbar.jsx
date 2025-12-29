import { useState, useEffect } from "react";
import GradientButton from "../Ui/GradientButton";
import WebsiteLogo from "../../assets/WebsiteLogo.webp";
import { MoveRight } from "lucide-react";
import { Link } from "react-router-dom";

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
        <header
          className={`
            fixed top-0 left-0 w-full z-50
            transition-all duration-300 ease-in-out
            h-20 bg-linear-to-r from-[#000E38] to-[#3F186A] shadow-lg
          `}
          role="banner"
        >
          <nav
            className="container mx-auto h-full xxl:px-25 px-5 flex items-center justify-between"
            aria-label="Main navigation"
          >
            <Link to="/" aria-label="School Exhibition 2025 - Home">
              <img
                src={WebsiteLogo}
                alt="School Exhibition 2025 Logo"
                className={`
                  transition-all duration-300
                  w-24
                `}
              />
            </Link>

            <button
              className="bg-white group flex gap-3 justify-center hover:cursor-pointer items-center px-6 py-4 rounded-md border font-semibold text-[#1e4990]"
              type="button"
              aria-label="Register for the exhibition"
            >
              REGISTER NOW{" "}
              <MoveRight strokeWidth={1.2} color="#1e4990" aria-hidden="true" />
            </button>
          </nav>
        </header>
      ) : (
        <header className="relative bg-white" role="banner">
          <nav
            className="container mx-auto xxl:px-25 px-5 h-24 flex items-center justify-end"
            aria-label="Main navigation"
          >
            <GradientButton />
          </nav>

          <a
            href="/"
            className="absolute xxl:left-[19rem] md:left-10 left-5 top-6 z-50"
            aria-label="School Exhibition 2025 - Home"
          >
            <img
              src={WebsiteLogo}
              alt="School Exhibition 2025 Logo"
              className="md:w-36 w-26"
            />
          </a>
        </header>
      )}
    </>
  );
};

export default Navbar;
