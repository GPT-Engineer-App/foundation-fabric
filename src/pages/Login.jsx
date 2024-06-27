import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const logos = [
  "/images/logo1.png",
  "/images/logo2.png",
  "/images/logo3.png",
];

const Login = () => {
  const [currentLogo, setCurrentLogo] = useState(logos[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLogo((prevLogo) => {
        const currentIndex = logos.indexOf(prevLogo);
        const nextIndex = (currentIndex + 1) % logos.length;
        return logos[nextIndex];
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-screen flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-800 opacity-50 blur-lg"></div>
      <div className="flex justify-center mb-8">
        <img src={currentLogo} alt="Logo" className="h-16" />
      </div>
      <div className="relative w-full max-w-md p-8 space-y-8 bg-white/30 backdrop-blur-md rounded-lg shadow-md">
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">
            Username
          </label>
          <Input id="username" name="username" type="text" required className="mt-1" />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <Input id="password" name="password" type="password" required className="mt-1" />
        </div>
        <div>
          <Button className="w-full mt-4">Login</Button>
        </div>
      </div>
    </div>
  );
};

export default Login;