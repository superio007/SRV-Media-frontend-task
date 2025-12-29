import styles from "./GradientWrapper.module.css";

const GradientIconWrapper = ({
  children,
  bg = "#DDBFFF",
  padding,
  width,
  height,
}) => {
  return (
    <span className={styles["gradient-wrapper"]} aria-hidden="true">
      <span
        className={styles["gradient-wrapper__inner"]}
        style={{
          backgroundColor: bg,
          padding: padding,
          width: width,
          height: height,
        }}
      >
        {children}
      </span>
    </span>
  );
};

export default GradientIconWrapper;
