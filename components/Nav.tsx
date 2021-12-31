import Link from "next/link";
import React from "react";

interface IProps {
  title: string;
  leftNav: {
    href: string;
    text: string;
  }[]
  rightNav: {
    href: string;
    text: string;
  }[]
}

export const Nav = ({ title, leftNav, rightNav }: IProps) => {
  return (
    <nav className="bg-theme-accent dark:bg-theme-dp04 shadow-md py-4 fixed z-50 w-full">
      <div className="flex justify-between container mx-auto">
        <div className="flex">
          <h1 className="mr-8">{title}</h1>
          <ul className="flex">
            {
              leftNav.map(
                ({ href, text }) => (
                  <li key={text} className="mr-4 font-bold">
                    <Link href={href}><a>{text}</a></Link>
                  </li>
                ),
              )
            }
          </ul>
        </div>
        <ul className="flex">
          {
            rightNav.map(
              ({ href, text }) => (
                <li key={text} className="ml-4 font-bold">
                  <Link href={href}><a>{text}</a></Link>
                </li>
              ),
            )
          }
        </ul>
      </div>
    </nav>
  );
};
