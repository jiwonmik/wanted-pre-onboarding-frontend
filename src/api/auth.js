import { apiClient } from "./client";

export const signUpApi = async (dataToSubmit) => {
    return apiClient.post("/auth/signup", dataToSubmit);
};

export const loginApi = async (dataToSubmit) => {
    return apiClient.post("/auth/signin", dataToSubmit);
};