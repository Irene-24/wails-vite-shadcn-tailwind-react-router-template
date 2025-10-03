import { useState } from "react";
import logo from "../assets/images/logo-universal.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Greet } from "@/wailsApp";

function HomePage() {
  const [resultText, setResultText] = useState(
    "Please enter your name below 👇"
  );
  const [name, setName] = useState("");
  const updateName = (e: any) => setName(e.target.value);
  const updateResultText = (result: string) => setResultText(result);

  function greet() {
    Greet(name).then(updateResultText);
  }

  return (
    <div className="h-[calc(100vh-16px)] w-full bg-blue-300  center p-8 overflow-hidden">
      <div className="">
        <div className="text-center space-y-2">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-balance">
            Welcome to Wails + Vite + Tailwind + Shadcn + ReactRouter
          </h1>
          <p className="text-blue-100 text-lg">
            A modern desktop application template
          </p>
        </div>

        <div className="relative my-4 mx-auto w-1/3 aspect-[3/2]">
          <img src={logo} id="logo" alt="logo" />
        </div>

        <p id="result" className="text-center my-2">
          {resultText}
        </p>

        <div className="flex mx-auto flex-col sm:flex-row gap-3 w-full max-w-md">
          <Input
            id="name"
            value={name}
            onChange={updateName}
            autoComplete="off"
            placeholder="Enter your name"
            className="flex-1 bg-white/90 border-white/20 text-gray-900 placeholder:text-gray-500"
          />
          <Button
            onClick={greet}
            size="lg"
            className="bg-white text-blue-600 hover:bg-blue-50 font-semibold"
          >
            Greet
          </Button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
