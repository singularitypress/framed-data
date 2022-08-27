import React, { FC, ReactNode } from "react";

interface IProps {
  children?: ReactNode;
  className?: string;
}

export const Container: FC<IProps> = ({ children = <></>, className = "" }) => {
  return (
    <div className={`container mx-auto px-4 h-full ${className}`}>
      {children}
    </div>
  );
};
