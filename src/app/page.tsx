"use client";

import React, { useState } from "react";
import { ArrowEmailForward, Dribbble, Github, Mail, Twitter } from "iconoir-react";

const metadata = {
  title: "Home",
  description:
    "serves as designer on the labs, I design and build digital products that are easy to use and look great. I'm a designer/maker and I'm passionate about creating delightful user experiences.",
};

const socials = [
  {
    name: "Dribbble",
    link: "https://dribbble.com/ramayudanto",
    icon: <Dribbble color="neutral-500" stroke="1px" height={20} width={20} />,
  },
  {
    name: "Twitter",
    link: "https://twitter.com/ramayudanto",
    icon: <Twitter color="neutral-500" stroke="1px" height={20} width={20} />,
  },
  {
    name: "Github",
    link: "https://github.com/ramayudanto",
    icon: <Github color="neutral-500" stroke="1px" height={20} width={20} />,
  },
];

export default function Home() {
  const [buttonText, setButtonText] = useState("Copy Email");

  const copyEmail = () => {
    navigator.clipboard.writeText("hi@ramayudanto.com");
    setButtonText("Email Copied");
    setTimeout(() => {
      setButtonText("Copy Email");
    }, 3000);
  };

  return (
    <main className="flex min-h-screen max-w-[1440px] mx-auto flex-col items-start justify-center p-24">
      <h1>Rayhan Ramayudanto</h1>
      <p className="text-neutral-500">Digital Product Designer</p>
      <div className="flex gap-4 pt-3 -ml-4">
        {socials.map((social, index) => (
          <a
            key={index}
            href={social.link}
            target="_blank"
            className="flex gap-3 p-3 hover:bg-neutral-900 rounded-lg text-neutral-500 stroke-neutral-500 hover:stroke-gray-100 hover:text-gray-100"
            rel="noopener noreferrer"
          >
            {social.icon}
            {social.name}
          </a>
        ))}
      </div>
      <button
        onClick={copyEmail}
        className="mt-4 flex  items-center gap-2 px-3 py-2 bg-white hover:bg-neutral-100 rounded-lg text-neutral-500 stroke-neutral-500 hover:stroke-gray-100"
      >
        <Mail color="neutral-500" stroke="1px" height={20} width={20} />
        {buttonText}
      </button>
      
    </main>
  );
}
