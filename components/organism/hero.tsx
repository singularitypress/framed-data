import { Container } from "@components/atom";
import React, { CSSProperties, FC } from "react";
import { ReactNode } from "react";

type TVariant = "grid" | "image";

interface IProps {
  children: ReactNode;
  variant?: TVariant;
  src?: string;
}

export const Hero: FC<IProps> = ({ children, variant = "grid", src = "" }) => {
  const bgStyle: {
    [key in TVariant]: CSSProperties;
  } = {
    grid: {
      backgroundSize: "40px 40px",
      backgroundImage:
        "linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)",
    },
    image: {
      backgroundSize: "cover",
      backgroundImage: `url(${src})`,
    },
  };

  return (
    <div
      className="w-full h-screen overflow-hidden relative"
      style={bgStyle[variant]}
    >
      <Container>{children}</Container>
    </div>
  );
};
