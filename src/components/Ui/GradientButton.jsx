import { MoveUpRight, MoveRight } from "lucide-react";
import styles from "./GradientButton.module.css";

const GradientButton = ({
  label = "REGISTER NOW",
  size = false,
  onClick,
  color = false,
  type = "button",
}) => {
  const buttonClasses = [
    styles["gradient-button"],
    size && styles["gradient-button--sized"],
    color && styles["gradient-button--inverted"],
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button onClick={onClick} type={type} className={buttonClasses}>
      <span className={styles["gradient-button__wipe"]} aria-hidden="true" />

      <span className={styles["gradient-button__content"]}>
        <span
          className={styles["gradient-button__icon-wrapper"]}
          aria-hidden="true"
        >
          <span
            className={`${styles["gradient-button__icon"]} ${styles["gradient-button__icon--default"]}`}
          >
            <MoveUpRight
              strokeWidth={1.2}
              color={color ? "#000E38" : "#ffffff"}
            />
          </span>

          <span
            className={`${styles["gradient-button__icon"]} ${styles["gradient-button__icon--active"]}`}
          >
            <MoveRight
              strokeWidth={1.2}
              color={color ? "#000E38" : "#ffffff"}
            />
          </span>
        </span>

        {label}
      </span>
    </button>
  );
};

export default GradientButton;
