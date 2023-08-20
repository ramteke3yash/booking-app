const express = require("express");
const bodyParser = require("body-parser");

const sequelize = require("./util/database");
const User = require("./models/user");
const cors = require("cors");
const { error } = require("console");

const app = express();

app.use(cors());

// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/user/add-user", async (req, res, next) => {
  try {
    if (!req.body.number) {
      // throw new Error("Phone is mandatory");
      console.log("some working");
      return res.status(400).json({ error: "Phone is required " });
    }
    const name = req.body.name;
    const email = req.body.email;
    const phonenumber = req.body.number;

    const data = await User.create({
      name: name,
      email: email,
      phonenumber: phonenumber,
    });
    res.status(201).json({ newUserDetail: data });
  } catch (error) {
    console.log("add user is failing", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/user/get-users", async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.status(200).json({ allUsers: users });
  } catch (error) {
    console.log("get user is failing", error);
    res.status(500).json({ error: "Internal server error" });
  }
});
app.delete("/user/delete-user/:id", async (req, res) => {
  const uId = req.params.id;
  await User.destroy({ where: { id: uId } });
  res.sendStatus(200);
});

app.put("/user/edit-user/:id", async (req, res) => {
  const uId = req.params.id;
  const { name, email, phonenumber } = req.body;

  try {
    const user = await User.findByPk(uId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    user.name = name;
    user.email = email;
    user.phonenumber = phonenumber;
    await user.save();

    res.status(200).json({ updatedUser: user });
  } catch (error) {
    console.log("edit user is failing", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

sequelize
  .sync()
  .then((result) => {
    //console.log(result);
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
