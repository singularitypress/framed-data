import React, { MouseEvent } from "react";

interface IProps {
  children?: React.ReactChild;
  className?: string;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void
  value?: string;
}

export const Button = ({ children = <></>, className = "", onClick, value = "" }: IProps) => {
  return (
    <button
      className={`py-3 px-6 border-2 border-black text-black rounded-full font-bold hover:bg-black hover:text-white ${className}`}
      onClick={onClick}
      value={value}>
      {children}
    </button>
  );
};
