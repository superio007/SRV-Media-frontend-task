import WebsiteLogo from "../../assets/WebsiteLogo.webp";
import { MapPin, PhoneCall, Youtube, Facebook, Instagram } from "lucide-react";
import GradientWrapper from "../Ui/GradientWrapper";

const Footer = () => {
  return (
    <footer
      className="bg-linear-to-t from-[#000E38] to-[#3F186A]"
      role="contentinfo"
    >
      <div className="container mx-auto xxl:px-25 px-5 md:py-14.5 py-8 flex md:flex-row flex-col justify-start items-start md:justify-between gap-6">
        <div>
          <a href="/" aria-label="School Exhibition 2025 - Home">
            <img
              src={WebsiteLogo}
              alt="School Exhibition 2025 Logo"
              className="md:w-36 w-26"
            />
          </a>
        </div>

        <article className="flex justify-center items-start gap-3.5">
          <GradientWrapper padding="8px">
            <MapPin
              strokeWidth={1.125}
              className="w-8 h-8"
              aria-hidden="true"
            />
          </GradientWrapper>
          <div className="flex flex-col gap-1.5">
            <h2 className="text-xl font-semibold text-white">
              Corporate Office:
            </h2>
            <address className="text-white text-sm font-normal not-italic">
              Suite B-5, Ballygunge Park Tower,
              <br /> 67B Ballygunge Circular Road,
              <br />
              Kolkata - 700019
            </address>
          </div>
        </article>

        <article className="flex justify-center items-start gap-3.5">
          <GradientWrapper padding="8px">
            <MapPin
              strokeWidth={1.125}
              className="w-8 h-8"
              aria-hidden="true"
            />
          </GradientWrapper>
          <div className="flex flex-col gap-1.5">
            <h2 className="text-xl font-semibold text-white">
              Ahmedabad Office:
            </h2>
            <address className="text-white text-sm font-normal not-italic">
              12/AA, Swastik Chambers, Near CU <br /> Shah College, Ashram Road,
              <br />
              Ahmedabad - 380009
            </address>
          </div>
        </article>

        <article className="flex justify-center items-start gap-3.5">
          <GradientWrapper padding="8px">
            <PhoneCall
              strokeWidth={1.125}
              className="w-8 h-8"
              aria-hidden="true"
            />
          </GradientWrapper>
          <div className="flex flex-col gap-1.5">
            <h2 className="text-xl font-semibold text-white">Call us on</h2>
            <address className="flex flex-col not-italic">
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
            </address>
          </div>
        </article>

        <article className="flex justify-center items-start gap-3.5">
          <div className="flex flex-col gap-1.5">
            <h2 className="text-xl font-semibold text-white">Follow us on</h2>
            <nav aria-label="Social media links" className="flex gap-4">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
              >
                <GradientWrapper padding="8px">
                  <Instagram
                    strokeWidth={1.125}
                    className="w-8 h-8"
                    aria-hidden="true"
                  />
                </GradientWrapper>
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Facebook"
              >
                <GradientWrapper padding="8px">
                  <Facebook
                    strokeWidth={1.125}
                    className="w-8 h-8"
                    aria-hidden="true"
                  />
                </GradientWrapper>
              </a>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on YouTube"
              >
                <GradientWrapper padding="8px">
                  <Youtube
                    strokeWidth={1.125}
                    className="w-8 h-8"
                    aria-hidden="true"
                  />
                </GradientWrapper>
              </a>
            </nav>
          </div>
        </article>
      </div>

      <div className="bg-white flex justify-center items-center p-4.5">
        <small className="bg-linear-to-r from-[#000E38] to-[#3F186A] bg-clip-text text-transparent text-center font-normal text-[16px]">
          Copyright &copy; {new Date().getFullYear()} | All rights reserved.
          Premier Schools Exhibition
        </small>
      </div>
    </footer>
  );
};

export default Footer;
