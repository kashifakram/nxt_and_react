"use client";
import Button from "@/comps/button";
import Image from "next/image";
import ThemeToggler from "@/comps/themetoggler";
import { useTheme } from "./contexts/themecontext";
import { useState } from "react";

export default function Page() {
  const [count, setCount] = useState(0);

  const handleClicked = () => {
    setCount(count + 1);
    alert(`Hey I'm showing and clicked ${count + 1} times`);
  };

  const cnt = false;
  const { theme } = useTheme();
  return !cnt ? (
    <>
      <h1>Manual Next.JS</h1>

      <Button
        isPrimary={true}
        text="Primary Button Example"
        onClick={handleClicked}
        counter={count}
      >
        <h2>This is child</h2>
      </Button>
      <Button
        isPrimary={false}
        text="Secondary Button Example"
        onClick={handleClicked}
        counter={count}
      >
        <h2>This is secondary child</h2>
      </Button>
    </>
  ) : (
    <div
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p>
          Get started by editing&nbsp;
          <code className="font-mono font-bold">app/page.tsx</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By <br />
            <Image
              src="/18.jpg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>
      <br />
      <ThemeToggler />
    </div>
  );
}
