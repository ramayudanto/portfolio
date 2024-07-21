"use client";
import React from "react";
import Image from "next/image";
import Head from "next/head";

const posts = [
  {
    id: "1",
    title: "title of the blog",
    description: "description of the blog",
    imageUrl:
      "https://uploads-ssl.webflow.com/63b428c2463266c95168c525/6672829c16bf5a394b08b487_still-5d27c30f2c4b82b2966f58eeb70a2923.png",
    href: "",
  },
  {
    id: "2",
    title: "title of the blog",
    description: "description of the blog",
    imageUrl:
      "https://uploads-ssl.webflow.com/63b428c2463266c95168c525/6672829c16bf5a394b08b487_still-5d27c30f2c4b82b2966f58eeb70a2923.png",
    href: "",
  },
  {
    id: "3",
    title: "title of the blog",
    description: "description of the blog",
    imageUrl:
      "https://uploads-ssl.webflow.com/63b428c2463266c95168c525/6672829c16bf5a394b08b487_still-5d27c30f2c4b82b2966f58eeb70a2923.png",
    href: "",
  },
  {
    id: "4",
    title: "title of the blog",
    description: "description of the blog",
    imageUrl:
      "https://uploads-ssl.webflow.com/63b428c2463266c95168c525/6672829c16bf5a394b08b487_still-5d27c30f2c4b82b2966f58eeb70a2923.png",
    href: "",
  },
];


export default function page() {
  return (
    <>
    <Head>
    <title>My page title</title>
    </Head>
      <div className="w-full h-auto sm:p-[50px] flex flex-col gap-12 text-white">
        <h1>Blog</h1>
        <div className="w-full">
          <div className="w-full grid max-w-2xl grid-cols-1 gap-6 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <a href={`blog/${post.id}`} key={post.id} className="w-full h-full">
                <div className="w-full rounded-lg overflow-hidden relative">
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    width={1000}
                    height={1000}
                  />
                </div>
                <div className="max-w-xl py-4">
                  <div className="group flex flex-col gap-y-2">
                    <h3 className="text-lg font-semibold leading-6 text-neutral-200">
                      <p>
                        <span className=" inset-0" />
                        {post.title}
                      </p>
                    </h3>
                    <p className="line-clamp-3 text-sm leading-6 text-neutral-500">
                      {post.description}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
