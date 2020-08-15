export const getOrders = async () => {
    return await fetch('http://localhost:9999/api/orders')
        .then((response) => response.json())
        .catch((error) => console.error(error))
}
