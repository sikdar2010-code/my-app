'use client';

import { useState, useEffect } from "react";

export default function Home() {
  type Profile = { name: string; age: number; city: string };
const [profiles, setProfiles] = useState<Profile[]>([]);
  const [city, setCity] = useState("");
  const [age, setAge] = useState("");

  useEffect(() => {
    fetch("http://localhost:10000/profiles")
      .then(res => res.json())
      .then((data: Profile[]) => setProfiles(data))
      .catch(err => console.log(err));
  }, []);

  const filtered = profiles.filter(p =>
    p.city?.toLowerCase().includes(city.toLowerCase()) &&
    (age === "" || p.age === Number(age))
  );

  return (
    <main className="min-h-screen p-10">

      <h1 className="text-3xl text-center mb-6">Backend Connected ?</h1>

      <div className="flex gap-4 mb-10">
        <input
          onChange={(e) => setCity(e.target.value)}
          placeholder="City"
          className="border p-2"
        />

        <input
          onChange={(e) => setAge(e.target.value)}
          placeholder="Age"
          type="number"
          className="border p-2"
        />
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {filtered.map((user, i) => (
          <div key={i} className="border p-4">
            <h2>{user.name}</h2>
            <p>{user.age} - {user.city}</p>
          </div>
        ))}
      </div>

    </main>
  );
}
