import React, { InputHTMLAttributes } from "react";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = (props: IProps) => {
  return (
    <input
      {...props}
      className={`
        p-4
        rounded-sm
        border-b-2
        border-black
        dark:bg-theme-accent
        dark:text-theme-base
        ${props.className}`} />
  );
};
