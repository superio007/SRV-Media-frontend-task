import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MoveRight } from "lucide-react";
import GradientButton from "../Ui/GradientButton";
import WebsiteLogo from "../../assets/WebsiteLogo.webp";
import styles from "./Navbar.module.css";

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
      <a href="#main-content" className={styles["navbar__skip-link"]}>
        Skip to main content
      </a>

      {scrolled ? (
        <header className={styles["navbar--scrolled"]} role="banner">
          <nav
            className={`${styles.navbar__container} ${styles["navbar__container--scrolled"]}`}
            aria-label="Main navigation"
          >
            <Link to="/" aria-label="School Exhibition 2025 - Home">
              <img
                src={WebsiteLogo}
                alt="School Exhibition 2025 Logo"
                className={styles.navbar__logo}
              />
            </Link>

            <button
              className={styles.navbar__button}
              type="button"
              aria-label="Register for the exhibition"
            >
              REGISTER NOW{" "}
              <MoveRight strokeWidth={1.2} color="#1e4990" aria-hidden="true" />
            </button>
          </nav>
        </header>
      ) : (
        <header className={styles.navbar} role="banner">
          <nav
            className={styles.navbar__container}
            aria-label="Main navigation"
          >
            <GradientButton />
          </nav>

          <Link
            to="/"
            className={styles["navbar__logo--floating"]}
            aria-label="School Exhibition 2025 - Home"
          >
            <img src={WebsiteLogo} alt="School Exhibition 2025 Logo" />
          </Link>
        </header>
      )}
    </>
  );
};

export default Navbar;
