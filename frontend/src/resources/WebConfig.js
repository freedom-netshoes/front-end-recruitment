const port = 3004
const host = "http://localhost"
const endpoints = {
    "product": "api/products"
}
const WebConfig = {
    apiProductUrl: `${host}:${port}/${endpoints['product']}`
};

export default WebConfig;