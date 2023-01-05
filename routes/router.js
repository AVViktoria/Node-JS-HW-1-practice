//*  PRACTICE BLAND   //
//   modules
const fs = require("fs/promises");
const path = require("path");
const { randomUUID } = require("crypto");

const { Router } = require("express");
const router = Router();
const usersPath = path.join(__dirname, "/../db/users.json");

//   functions
const getUsersList = async () => {
  return JSON.parse(await fs.readFile(usersPath));
};

const writeUsers = async (users) => {
  return await fs.writeFile(usersPath, JSON.stringify(users));
};

router.get("/users", async (req, res) => {
  try {
    const users = await getUsersList();
    res.status(200).json(users);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

router.get("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const users = await getUsersList();
    const user = users.find((user) => String(user.id) === id);
    if (!user) {
      return res.status(404).json({ message: "User was not found" });
    }
    res.status(200).json(user);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

router.post("/users", async (req, res) => {
  try {
    const body = req.body;
    const users = await getUsersList();
    const user = { id: randomUUID(), ...body };
    users.push(user);
    await writeUsers(users);
    res.status(201).json({ user });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

router.put("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const users = await getUsersList();

    const index = users.findIndex((user) => String(user.id) === id);
    if (index === -1) {
      return res.status(404).json({ message: "User was not found" });
    }
    const user = { ...users[index], ...body };
    res.status(200).json({ user });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

router.delete("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const users = await getUsersList();
    const filteredUsers = users.filter((user) => String(user.id) !== id);
    if (filteredUsers.length === users.length) {
      return res.status(404).json({ message: "User was not found" });
    }
    await writeUsers(filteredUsers);
    res.status(200).json({ message: "User was removed" });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// router.get('/test', (req, res)=>{
//   res.json({message: "Hello NodeJS!"})
// });

module.exports = router;
