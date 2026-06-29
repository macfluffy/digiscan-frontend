export const responseStatus = {
    ok: 200,
    created: 201,
    successfulDelete: 204,
    badRequest: 400,
    unauthorized: 401,
    notFound: 404,
    serverError: 500
}

export function deleteSuccessful(serverResponse) {
    if (serverResponse === responseStatus.successfulDelete) {
        return true;
    }

    return false;
}