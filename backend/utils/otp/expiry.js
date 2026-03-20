// utils/otp/otpExpiry.js

export const otpExpiry = (minutes = 5) => {
  return new Date(Date.now() + minutes * 60 * 1000);
};