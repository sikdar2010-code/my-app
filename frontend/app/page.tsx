"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000")
      .then((res) => res.text())
      .then((data) => setMessage(data))
      .catch((err) => {
        console.error("Error:", err);
        setMessage("Backend connection failed ❌");
      });
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
        <h1 className="text-2xl font-bold text-green-600">
          {message || "Loading..."}
        </h1>
      </div>
    </div>
  );
}