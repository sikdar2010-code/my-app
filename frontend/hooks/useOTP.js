import { useState } from "react";
import { sendOTP } from "../lib/api/api";

export const useOTP = () => {
  const [loading, setLoading] = useState(false);

  const handleSendOTP = async (phone) => {
    setLoading(true);
    const data = await sendOTP(phone);
    setLoading(false);
    return data;
  };

  return { handleSendOTP, loading };
};