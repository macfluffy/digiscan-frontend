import { api } from "./api.js";

export async function viewAllSets() {
    const response = await api.getSets();
    console.log(response);
}