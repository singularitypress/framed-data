import React, { InputHTMLAttributes, useState } from "react";

export const Toggle = ({ id, onChange, children }: InputHTMLAttributes<HTMLInputElement>) => {
  const [checked, setChecked] = useState(false);
  return (
    <label htmlFor={id} className="flex items-center cursor-pointer">
      <div className="relative">
        <input type="checkbox" id={id} className="sr-only" onChange={(e) => {
          setChecked(e.target.checked);
          if (onChange) onChange(e);
        }} />
        <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
        <div className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition ${checked ? "translate-x-full" : ""}`}></div>
      </div>
      <div className="ml-3 text-theme-base dark:text-theme-accent font-medium">
        {children}
      </div>
    </label>
  );
};
