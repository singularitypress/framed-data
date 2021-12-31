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
    <nav>
      <h1>{title}</h1>
      <ul>
        {
          leftNav.map(
            ({ href, text }) => (
              <li key={text}>
                <Link href={href}><a>{text}</a></Link>
              </li>
            ),
          )
        }
      </ul>
      <ul>
        {
          rightNav.map(
            ({ href, text }) => (
              <li key={text}>
                <Link href={href}><a>{text}</a></Link>
              </li>
            ),
          )
        }
      </ul>
    </nav>
  );
};
