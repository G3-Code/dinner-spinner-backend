const server = require("./server.js");

const port = "8000";

server.listen(process.env.PORT, () => {
  console.log(`API is running in port ${port}`);
});
