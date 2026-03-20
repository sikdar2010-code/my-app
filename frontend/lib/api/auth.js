// lib/api/auth.js
export const loginUser = async (data) => {
  const res = await fetch("/api/login", {
    method: "POST",
    body: JSON.stringify(data),
  });
  return res.json();
};