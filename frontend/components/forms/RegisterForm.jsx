"use client";
import { useState } from "react";

export default function RegisterForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <form onSubmit={handleSubmit} className="w-96 space-y-4">
      <h2 className="text-2xl font-bold text-center">Create Account</h2>

      <input name="name" placeholder="Name" onChange={handleChange} className="input" />
      <input name="email" placeholder="Email" onChange={handleChange} className="input" />
      <input name="password" placeholder="Password" onChange={handleChange} className="input" />

      <button type="submit" className="btn">
        Register
      </button>
    </form>
  );
}