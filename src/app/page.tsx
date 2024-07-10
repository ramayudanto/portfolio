import Image from "next/image";
import { metadata } from "./layout";
metadata.title = "Home";
metadata.description = "Home page";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <h1>Rayhan Ramayudanto</h1>
        <p className="text-neutral-500">digital product designer</p>
    </main>
  );
}
