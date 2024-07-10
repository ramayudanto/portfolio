import Image from "next/image";
import { metadata } from "./layout";
import { Github, Iconoir, Twitter } from "iconoir-react";

metadata.title = "Home";
metadata.description = "serves as designer on the labs, I design and build digital products that are easy to use and look great. I'm a designer/maker and I'm passionate about creating delightful user experiences.";
export default function Home() {
  return (
    <main className="flex min-h-screen max-w-[1440px] mx-auto flex-col items-start justify-center p-24">
      <h1>Rayhan Ramayudanto</h1>
      <p className="text-neutral-500">Digital Product Designer</p>
      <div className="flex gap-4 pt-3 -ml-4">
        <a
          href="https://twitter.com/ramayudanto"
          target="_blank"
          className="flex gap-2 p-3 hover:bg-neutral-900 rounded-lg text-neutral-500 stroke-neutral-500 hover:stroke-gray-100 hover:text-gray-100"
        >
          <Github color="neutral-500" stroke="1px" height={20} width={20} />
          Github
        </a>

        <a
          href="https://twitter.com/ramayudanto"
          target="_blank"
          className="flex gap-2 p-3 hover:bg-neutral-900 rounded-lg text-neutral-500 stroke-neutral-500 hover:stroke-gray-100 hover:text-gray-100"
        >
          <Twitter color="neutral-500" stroke="1px" height={20} width={20} />
          twitter
        </a>
      </div>
    </main>
  );
}
