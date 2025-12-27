import React from "react";
import WebsiteLogo from "../../assets/WebsiteLogo.webp";
import { MapPin, PhoneCall, Youtube, Facebook, Instagram } from "lucide-react";
import GradientWrapper from "../Ui/GradientWrapper";
const Footer = () => {
  return (
    <>
      <footer className="container mx-auto">
        <div className="bg-linear-to-t from-[#000E38] to-[#3F186A] md:px-25 px-5 md:py-14.5 py-8 flex md:flex-row flex-col justify-start items-start md:justify-between gap-6">
          <div>
            <img
              src={WebsiteLogo}
              alt="Website Logo"
              className="md:w-36 w-26"
            />
          </div>
          <div className="flex justify-center items-start gap-3.5">
            <GradientWrapper padding="8px">
              <MapPin strokeWidth={1.125} className="w-8 h-8" />
            </GradientWrapper>
            <div className="flex flex-col gap-1.5">
              <h2 className="text-xl font-semibold text-white ">
                Corporate Office:
              </h2>
              <address className="text-white text-sm font-normal not-italic">
                Suite B-5, Ballygunge Park Tower,
                <br /> 67B Ballygunge Circular Road,
                <br />
                Kolkata - 700019
              </address>
            </div>
          </div>
          <div className="flex justify-center items-start gap-3.5">
            <GradientWrapper padding="8px">
              <MapPin strokeWidth={1.125} className="w-8 h-8" />
            </GradientWrapper>
            <div className="flex flex-col gap-1.5">
              <h2 className="text-xl font-semibold text-white ">
                Ahmedabad Office:
              </h2>
              <address className="text-white text-sm font-normal not-italic">
                12/AA, Swastik Chambers, Near CU <br /> Shah College, Ashram
                Road,
                <br />
                Ahmedabad - 380009
              </address>
            </div>
          </div>
          <div className="flex justify-center items-start gap-3.5">
            <GradientWrapper padding="8px">
              <PhoneCall strokeWidth={1.125} className="w-8 h-8" />
            </GradientWrapper>
            <div className="flex flex-col gap-1.5">
              <h2 className="text-xl font-semibold text-white ">Call us on</h2>
              <span className="flex flex-col">
                <a
                  href="tel:+919674805912"
                  className="text-white font-normal text-sm"
                >
                  +91 96748 05912
                </a>
                <a
                  href="tel:+919674585012"
                  className="text-white font-normal text-sm"
                >
                  +91 96745 85012
                </a>
              </span>
            </div>
          </div>
          <div className="flex justify-center items-start gap-3.5">
            <div className="flex flex-col gap-1.5">
              <h2 className="text-xl font-semibold text-white ">
                Follow us on
              </h2>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/" target="_blank">
                  <GradientWrapper padding="8px">
                    <Instagram strokeWidth={1.125} className="w-8 h-8" />
                  </GradientWrapper>
                </a>
                <a href="https://www.facebook.com/" target="_blank">
                  <GradientWrapper padding="8px">
                    <Facebook strokeWidth={1.125} className="w-8 h-8" />
                  </GradientWrapper>
                </a>
                <a href="https://www.youtube.com/" target="_blank">
                  <GradientWrapper padding="8px">
                    <Youtube strokeWidth={1.125} className="w-8 h-8" />
                  </GradientWrapper>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white flex justify-center items-center p-4.5">
          <p className="bg-linear-to-r from-[#000E38] to-[#3F186A] bg-clip-text text-transparent text-center font-normal text-[16px] ">
            Copyright &copy; {new Date().getFullYear()} | All rights reserved.
            Premier Schools Exhibition
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
