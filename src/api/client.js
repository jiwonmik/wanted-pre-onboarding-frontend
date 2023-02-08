import axios from "axios";

export const apiClient = axios.create({
  baseURL: "https://pre-onboarding-selection-task.shop",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem("token");

  if (accessToken && config.headers) {
    config.headers["Authorization"] = `Bearer ${accessToken}`;
  }
  return config;
});