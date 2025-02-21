import fs from "fs";
import bcrypt from "bcrypt";


const USERS_FILE_PATH = "src/DB/users.json";


const getUsersFromFile = () => {
  try {
    const rawData = fs.readFileSync(USERS_FILE_PATH, "utf8");
    return JSON.parse(rawData);
  } catch (error) {
    console.error("Error reading users from file", error);
    return [];
  }
};


const saveUsersToFile = (users) => {
  try {
    fs.writeFileSync(USERS_FILE_PATH, JSON.stringify(users, null, 2), "utf8");
  } catch (error) {
    console.error("Error saving users to file", error);
  }
};

export const createUser = (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: "Username and password are required" });
  }

  const users = getUsersFromFile();


  const existingUser = users.find((user) => user.username === username);
  if (existingUser) {
    return res.status(400).json({ message: "Username already exists" });
  }

  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) {
      return res.status(500).json({ message: "Error hashing password" });
    }

    // Create new user
    const newUser = {
      id: users.length + 1, 
      username,
      password , 
    };

    users.push(newUser);

  
    saveUsersToFile(users);

   
    res.status(201).json({
      message: "User created successfully!",
      user: { username: newUser.username },
    });
  });
};
