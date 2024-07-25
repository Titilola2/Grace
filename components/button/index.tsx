import React, { CSSProperties } from "react";
interface ButtonProps {
  title: string;
  backgroundColor?: string;
  color?: string;
  height?: string;
  width?: string;
  border?: string;
  fontSize?: string;
  formAction?: (e: any) => void;
  onClick?: () => void;
  type?: any;
  disabled?: boolean;
  loading?: boolean;
}
const Button: React.FC<ButtonProps> = ({ title, backgroundColor, color, height, width, border, fontSize, onClick, formAction, disabled, type }) => {
  const buttonStyles: CSSProperties = {
    backgroundColor: backgroundColor || "#6B232A",
    color: color || "white",
    height: height || "auto",
    width: width || "auto",
    border: border || "auto",
    fontSize: fontSize,
  };
 
  return (
    <button
      type={type}
      formAction={formAction}
      style={buttonStyles}
      disabled={disabled}
      onClick={onClick}
      className="flex items-center justify-center font-custom bg-[#6B232A] text-white py-2 px-4 focus:outline-none focus:border-[#77454ac3] focus:ring focus:ring-[#62272ca3] hover:shadow-lg hover:text-white hover:bg-[#f7e5e7f5]"
    >
      {title}
    </button>
  );
};

export default Button;
