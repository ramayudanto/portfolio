/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ArrowEmailForward,
  Dribbble,
  Github,
  Mail,
  Twitter,
} from "iconoir-react";
import PortfolioItemList from "../../components/PortfolioItemList";
import PortfolioPage from "../../components/PortfolioPage";
import { portfolioItems } from "./data";

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
  const [buttonText, setButtonText] = useState("hi@ramayudanto.com");

  const copyEmail = () => {
    navigator.clipboard.writeText("hi@ramayudanto.com");
    setButtonText("Email Copied");
    setTimeout(() => {
      setButtonText("hi@ramayudanto.com");
    }, 3000);
  };
  const posts = [
    {
      id: 1,
      title: "Case Study Title",
      href: "/test1",
      description:
        "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
      imageUrl:
        "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    },
    {
      id: 2,
      title: "Case Study Title",
      href: "/test2",
      description:
        "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
      imageUrl:
        "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    },
    {
      id: 3,
      title: "Case Study Title",
      href: "/test3",
      description:
        "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
      imageUrl:
        "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    },
    {
      id: 4,
      title: "Case Study Title",
      href: "/test4",
      description:
        "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
      imageUrl:
        "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    },
  ];

  return (
    <main className="flex flex-col p-4 h-auto max-w-[1920px] mx-auto sm:items-start sm:justify-center sm:p-8">
      <p className="">Rayhan Ramayudanto</p>
      <p className="text-neutral-500 mt-2">Digital Product Designer</p>
      <div className="flex gap-4 pt-4 -ml-2">
        {socials.map((social, index) => (
          <a
            key={index}
            href={social.link}
            target="_blank"
            className="flex gap-3 p-3 hover:bg-neutral-900 rounded-lg text-neutral-500 stroke-neutral-500 hover:stroke-neutral-500 hover:text-neutral-500"
          >
            {social.icon}
            {social.name}
          </a>
        ))}
      </div>
      <button
        onClick={copyEmail}
        className="mt-2 flex justify-center items-center gap-2 px-3 py-2 bg-white hover:bg-neutral-200 rounded-lg text-neutral-500 stroke-neutral-500 hover:stroke-neutral-500"
      >
        <Mail color="neutral-500" stroke="1px" height={20} width={20} />
        {buttonText}
      </button>
      <div className="h-16 w-full rounded-lg">
      </div>
      <PortfolioPage items={portfolioItems} />
    </main>
  );
}
