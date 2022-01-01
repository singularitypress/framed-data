import React from "react";

interface IProps {
  children: React.ReactNode;
  className?: string;
}

export const Container = ({ children, className = "" }: IProps) => {
  return (
    <div className={`dark:bg-theme-dp04 shadow-md rounded-md p-8 ${className}`}>
      {children}
    </div>
  );
};
