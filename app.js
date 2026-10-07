const express = require("express");
const fs = require("fs");
let users = JSON.parse(fs.readFileSync("users.json", "utf8"));

const app = express();
const PORT = 3000;
app.use(express.json());

app.get("/users", (req, res) => {
    res.json(users);
});

app.post("/users", (req, res) => {
    const newUser = req.body;

    users.push(newUser);

    fs.writeFileSync("users.json", JSON.stringify(users, null, 2));

    res.json({
        message: "User added successfully",
        data: newUser
    });
});

app.delete("/users/:id", (req, res) => {
    const id = Number(req.params.id);

    const userExists = users.find(user => user.id === id);

    if (!userExists) {
        return res.status(404).json({ message: "User not found" });
    }

    users = users.filter(user => user.id !== id);

    fs.writeFileSync("users.json", JSON.stringify(users, null, 2));

    res.json({
        message: "User deleted successfully"
    });
});

app.put("/users/:id", (req, res) => {
    const id = Number(req.params.id);

    const user = users.find(user => user.id === id);

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    user.name = req.body.name;
    user.age = req.body.age;

    fs.writeFileSync("users.json", JSON.stringify(users, null, 2));

    res.json({
        message: "User updated successfully",
        data: user
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
