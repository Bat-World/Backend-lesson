import { users } from "../../../index.js";

export const createLogin = (req, res) => {
    const { username, password } = req.body; 
    const user = users.find(user => user.username === username);
    if (user && user.password === password) {
        return res.send(`Welcome back! ${user.name}` );
    } else {
        return res.send("Invalid login");
    }
};

