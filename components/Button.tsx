import React, { MouseEvent, useContext } from "react";
import { ThemeContext } from "../context";

interface IProps {
  children?: React.ReactChild;
  className?: string;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void
  value?: string;
}

export const Button = ({ children = <></>, className = "", onClick, value = "" }: IProps) => {
  return (
    <button
      className={`
        py-3
        px-6
        border-2
        border-black
        text-black
        rounded-full
        font-bold
        hover:bg-black
        hover:text-white
        dark:border-theme-accent
        dark:text-theme-accent
        dark:hover:bg-theme-accent
        dark:hover:text-theme-base
        ${className}`}
      onClick={onClick}
      value={value}>
      {children}
    </button>
  );
};
