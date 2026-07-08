import { deleteSuccessful } from "./response.js";

const apiBaseURL = import.meta.env.VITE_API_BASE_URL || '/api';

async function clientRequest(method, path, body) {
    const response = await fetch(`${apiBaseURL}${path}`, {
        method,
        headers: { 
            'Content-Type': 'application/json' 
        },
        body: body ? JSON.stringify(body) : undefined,
    });

    if (deleteSuccessful(response.status)) return null;
    if (!response.ok) {
        const error = await response.json().catch(() => ({}));
        throw new Error(error.error || `HTTP ${response.status}`);
    }

    return response.json();
}

export const api = {
    health: () => clientRequest('GET', '/health'),
    getCard: (query) => clientRequest('GET', `/cards?{$query}`),
    getCards: () => clientRequest('GET', '/cards'),
    getSets: () => clientRequest('GET', '/cardSets'),
};