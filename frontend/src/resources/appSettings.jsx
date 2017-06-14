const port = 3004
const host = "http://localhost"
const endpoints = {
    "product": "api/products"
}
export const WebConfig = {
    apiProductUrl: `${host}:${port}/${endpoints['product']}`
};

export const appSettings = {
    imgUrl: "images/"
}