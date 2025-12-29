import { MapPin, PhoneCall, Youtube, Facebook, Instagram } from "lucide-react";
import WebsiteLogo from "../../assets/WebsiteLogo.webp";
import GradientWrapper from "../Ui/GradientWrapper";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.footer__container}>
        <div>
          <a href="/" aria-label="School Exhibition 2025 - Home">
            <img
              src={WebsiteLogo}
              alt="School Exhibition 2025 Logo"
              className={styles.footer__logo}
            />
          </a>
        </div>

        <article className={styles.footer__section}>
          <GradientWrapper padding="8px">
            <MapPin
              strokeWidth={1.125}
              style={{ width: "2rem", height: "2rem" }}
              aria-hidden="true"
            />
          </GradientWrapper>
          <div className={styles["footer__section-content"]}>
            <h2 className={styles.footer__heading}>Corporate Office:</h2>
            <address className={styles.footer__address}>
              Suite B-5, Ballygunge Park Tower,
              <br /> 67B Ballygunge Circular Road,
              <br />
              Kolkata - 700019
            </address>
          </div>
        </article>

        <article className={styles.footer__section}>
          <GradientWrapper padding="8px">
            <MapPin
              strokeWidth={1.125}
              style={{ width: "2rem", height: "2rem" }}
              aria-hidden="true"
            />
          </GradientWrapper>
          <div className={styles["footer__section-content"]}>
            <h2 className={styles.footer__heading}>Ahmedabad Office:</h2>
            <address className={styles.footer__address}>
              12/AA, Swastik Chambers, Near CU <br /> Shah College, Ashram Road,
              <br />
              Ahmedabad - 380009
            </address>
          </div>
        </article>

        <article className={styles.footer__section}>
          <GradientWrapper padding="8px">
            <PhoneCall
              strokeWidth={1.125}
              style={{ width: "2rem", height: "2rem" }}
              aria-hidden="true"
            />
          </GradientWrapper>
          <div className={styles["footer__section-content"]}>
            <h2 className={styles.footer__heading}>Call us on</h2>
            <address className={styles.footer__address}>
              <a href="tel:+919674805912" className={styles.footer__link}>
                +91 96748 05912
              </a>
              <br />
              <a href="tel:+919674585012" className={styles.footer__link}>
                +91 96745 85012
              </a>
            </address>
          </div>
        </article>

        <article className={styles.footer__section}>
          <div className={styles["footer__section-content"]}>
            <h2 className={styles.footer__heading}>Follow us on</h2>
            <nav
              aria-label="Social media links"
              className={styles["footer__social-nav"]}
            >
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
              >
                <GradientWrapper padding="8px">
                  <Instagram
                    strokeWidth={1.125}
                    style={{ width: "2rem", height: "2rem" }}
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
                    style={{ width: "2rem", height: "2rem" }}
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
                    style={{ width: "2rem", height: "2rem" }}
                    aria-hidden="true"
                  />
                </GradientWrapper>
              </a>
            </nav>
          </div>
        </article>
      </div>

      <div className={styles.footer__copyright}>
        <small className={styles["footer__copyright-text"]}>
          Copyright &copy; {new Date().getFullYear()} | All rights reserved.
          Premier Schools Exhibition
        </small>
      </div>
    </footer>
  );
};

export default Footer;
