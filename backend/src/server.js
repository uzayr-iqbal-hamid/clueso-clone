const app = require("./app");

console.log("App value: ", app) 

const PORT = 5000;
const HOST = "127.0.0.1";

app.listen(PORT, HOST, () => {
    console.log(`Server is running at http://${HOST}:${PORT}`);
});