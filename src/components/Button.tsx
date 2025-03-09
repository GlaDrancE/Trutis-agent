import React from "react";

interface ButtonProps {
  text: string;
  primary?: boolean;
  transparent?: boolean;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  text,
  primary = false,
  transparent = false,
  onClick,
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        px-4 py-3 rounded-lg font-medium font-poppins transition-all duration-300 group
        ${primary
          ? "bg-black text-white hover:bg-opacity-80 hover:bg-black"
          : transparent
            ? "bg-transparent text-black border border-black hover:border-gray-700"
            : "bg-gray-200 text-black hover:bg-gray-300"}
        sm:px-8 sm:p-4 sm:text-base md:px-6 md:py-3 md:text-sm
        ${className} // Apply custom classes
      `}
    >
      <span className="flex items-center justify-center">
        {text.split("→")[0]}
        {text.includes("→") && (
          <span className="ml-1 inline-block transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        )}
      </span>
    </button>
  );
};

export default Button;