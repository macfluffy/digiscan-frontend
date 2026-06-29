import { api } from "./api.js";

export async function getAllSets() {
    const response = await api.getSets();
    return response;
}