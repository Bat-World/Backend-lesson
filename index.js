const express = require("express");
const app = express();
const port = 3000;

let users = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Smith" },
];

app.get("/users", (req, res) => {
  res.json(users);
});

app.delete("/users", (req, res) => {
  if (users.length > 0) {
    const removedUser = users.pop();
    res.json(removedUser);
  } else {
    res.json({ message: "No users to delete" });
  }
});

app.post("/users", (req, res) => {


  users.push(req.body);
  res.json(req.body);
});

app.put("/users", (req, res) => {
  if (users.length > 0) {
    users[0] = { id: 5, name: "Updated User" };
    res.json(users[0]);
  } else {
    res.json({ message: "No users to update" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
