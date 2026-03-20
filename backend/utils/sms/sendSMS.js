// utils/sms/sendSMS.js

export const sendSMS = async (phone, message) => {
  try {
    // 🔥 For now শুধু console (later Twilio / Fast2SMS)
    console.log(`📩 Sending SMS to ${phone}: ${message}`);

    return true;
  } catch (error) {
    console.error("❌ SMS failed:", error.message);
    return false;
  }
};