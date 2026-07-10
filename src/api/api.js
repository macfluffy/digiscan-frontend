import { deleteSuccessful } from "./response.js";

const apiBaseURL = import.meta.env.VITE_API_BASE_URL || '/api';

function constructQuery(query) {
    const searchQuery = new URLSearchParams();
    if (query.cardName) searchQuery.set("cardName", query.cardName);
    if (query.cardText) searchQuery.set("cardText", query.cardText);
    if (query.cardType) searchQuery.set("cardType", query.cardType);
    if (query.costType) searchQuery.set("costType", query.costType);
    if (query.page) searchQuery.set("page", query.page);

    return searchQuery.toString();
}

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
    getCard: (query) => {
                            const searchQuery = constructQuery(query);
                            return clientRequest('GET', `/cards?${searchQuery}`);
                        },
    getCards: () => clientRequest('GET', '/cards'),
    getSets: () => clientRequest('GET', '/cardSets'),
};