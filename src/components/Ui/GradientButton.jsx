import React from "react";
import { MoveUpRight, MoveRight } from "lucide-react";

const GradientButton = ({
  label = "REGISTER NOW",
  onClick,
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        group relative overflow-hidden
        flex justify-center items-center
        px-6 py-4 rounded-md
        border border-[#000E38]
        font-semibold text-[#000E38]
        transition-transform duration-150
        active:scale-95
        active:shadow-inner
        ${className}
      `}
    >
      {/* Gradient wipe */}
      <span
        className="
          absolute inset-y-0 left-0 w-14
          bg-linear-to-r from-[#000E38] to-[#3F186A]
          transition-all duration-300 ease-out
          group-hover:w-full
          group-active:w-full
        "
      />

      {/* Content */}
      <span
        className="
          relative z-10 flex items-center gap-3
          transition-colors duration-300
          group-hover:text-white
          group-active:text-white
        "
      >
        <span className="relative w-5 h-5 flex items-center justify-center">
          {/* Default icon */}
          <span
            className="
              absolute transition-all duration-300
              group-hover:opacity-0 group-hover:-translate-y-1
              group-active:opacity-0 group-active:-translate-y-1
            "
          >
            <MoveUpRight strokeWidth={1.2} color="#ffffff" />
          </span>

          {/* Active icon */}
          <span
            className="
              absolute opacity-0 translate-y-1
              transition-all duration-300
              group-hover:opacity-100 group-hover:translate-y-0
              group-active:opacity-100 group-active:translate-y-0
            "
          >
            <MoveRight strokeWidth={1.2} color="#ffffff" />
          </span>
        </span>

        {label}
      </span>
    </button>
  );
};

export default GradientButton;
