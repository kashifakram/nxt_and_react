"use client";
import Button from "@/comps/button";
import { useState } from "react";

export default function Page() {
  const [count, setCount] = useState(0);

  const handleClicked = () => {
    setCount(count + 1);
    alert(`Hey I'm showing and clicked ${count + 1} times`);
  };

  return (
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
  );
}
