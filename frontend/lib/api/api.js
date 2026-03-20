const BASE_URL = "http://localhost:5000/api";

export const sendOTP = async (phone) => {
  const res = await fetch(`${BASE_URL}/user/send-otp`, {
    method: "POST",
    body: JSON.stringify({ phone }),
    headers: { "Content-Type": "application/json" },
  });

  return res.json();
};