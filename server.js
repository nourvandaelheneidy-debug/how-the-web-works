const http = require("http");

const server = http.createServer((req, res) => {

  
  if (req.method === "GET" && req.url === "/") {
    res.end("Home");
  }

 
  if (req.method === "GET" && req.url === "/users") {
    const users = ["Nourvanda", "Norhan", "Yazan"];

    res.end(JSON.stringify(users));
  }

  
  if (req.method === "GET" && req.url === "/products") {
    const products = [
      { id: 1, name: "Laptop" },
      { id: 2, name: "Phone" },
      { id: 3, name: "Headphones" }
    ];

    res.end(JSON.stringify(products));
  }

  
  if (req.method === "POST" && req.url === "/products/add") {
    let data = "";

    req.on("data", (chunk) => {
      data += chunk;
    });

    req.on("end", () => {
      console.log("Received data:", data);

      res.end("Data received and stored successfully");
    });
  }

});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});