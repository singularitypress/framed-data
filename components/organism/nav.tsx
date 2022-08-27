import { Container } from "@components/atom";
import Link from "next/link";
import React, { FC } from "react";

export const Nav: FC = () => {
  const navItems = {
    Home: "/",
    Data: "/data",
  };
  return (
    <nav className="fixed w-full bg-gray-900 bottom-0 top-auto md:top-0 md:bottom-auto z-50">
      <Container>
        <ul className="flex flex-row">
          {Object.keys(navItems).map((title, index) => (
            <li key={`${title}-${index}`} className="p-4">
              <Link href={navItems[title]}>
                <a className="hover:border-b hover:border-b-white hover:border-dotted font-bold">
                  {title}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </nav>
  );
};
