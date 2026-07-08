import { api } from "./api";

export async function getAllCards() {
    const response = await api.getCards();
    return response;
}