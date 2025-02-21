import fs from "fs";
import bcrypt from "bcryptjs";

// Path to your users.json file
const USERS_FILE_PATH = "src/DB/users.json";

// Read users from the users.json file
const getUsersFromFile = () => {
  try {
    const rawData = fs.readFileSync(USERS_FILE_PATH, "utf8");
    return JSON.parse(rawData);
  } catch (error) {
    console.error("Error reading users from file", error);
    return [];
  }
};

// Write users to the users.json file
const saveUsersToFile = (users) => {
  try {
    fs.writeFileSync(USERS_FILE_PATH, JSON.stringify(users, null, 2), "utf8");
  } catch (error) {
    console.error("Error saving users to file", error);
  }
};

export const createUser = (req, res) => {
  const { username, password } = req.body;

  // Check if the user provided both username and password
  if (!username || !password) {
    return res.status(400).json({ message: "Username and password are required" });
  }

  // Fetch existing users from the users.json file
  const users = getUsersFromFile();

  // Check if the username already exists
  const existingUser = users.find((user) => user.username === username);
  if (existingUser) {
    return res.status(400).json({ message: "Username already exists" });
  }

  // Hash the password before storing it
  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) {
      return res.status(500).json({ message: "Error hashing password" });
    }

    // Create new user
    const newUser = {
      id: users.length + 1, // You can use an auto-incrementing ID or a UUID
      username,
      password: hashedPassword, // Store the hashed password
    };

    // Add the new user to the users array
    users.push(newUser);

    // Save the updated users array to the users.json file
    saveUsersToFile(users);

    // Send a response with the new user data (without password)
    res.status(201).json({
      message: "User created successfully!",
      user: { username: newUser.username },
    });
  });
};
