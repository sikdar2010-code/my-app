// hooks/useApi.js
export const useApi = () => {
  const baseUrl = "http://localhost:5000";

  const post = async (url, data) => {
    const res = await fetch(baseUrl + url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return res.json();
  };

  return { post };
};