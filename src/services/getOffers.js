export const getOffers = async () => {
    return await fetch('http://localhost:9999/api/offers')
        .then((response) => response.json())
        .catch((error) => console.error(error))
}
