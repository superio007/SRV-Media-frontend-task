const GradientIconWrapper = ({
  children,
  bg = "#DDBFFF",
  padding,
  width,
  height,
}) => {
  return (
    <div className="rounded-xl p-0.5 bg-linear-to-r from-[#070F3D] to-[#755797] inline-flex">
      <div
        className={`rounded-xl flex items-center justify-center`}
        style={{
          backgroundColor: bg,
          padding: padding,
          width: width,
          height: height,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default GradientIconWrapper;
