const express = require("express");
const router = express.Router();
const users = require("../models/userSchema");

router.post("/register", async (req, res) => {
  const { name, contact, address, edu, familyBg, sm_links, dob, desc } =
    req.body;

  if (
    !name ||
    !contact ||
    !address ||
    !edu ||
    !familyBg ||
    !sm_links ||
    !dob ||
    !desc
  ) {
    return res.status(422).json({ error: "Fill in all the required fields." });
  }

  try {
    const preuser = await users.findOne({ contact: contact });
    console.log(preuser);
    if (preuser) {
      return res.status(422).json({ error: "This user is already registered." });
    } else {
      const adduser = new users({
        name,
        contact,
        address,
        edu,
        familyBg,
        sm_links,
        dob,
        desc,
      });

      await adduser.save();
      console.log(adduser);
      return res.status(201).json(adduser);
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server Error." });
  }
});

router.get("/getdata", async (req, res) => {
  try {
    const userdata = await users.find();
    console.log(userdata);
    res.status(200).json(userdata);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error." });
  }
});

router.get("/getuser/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const userindividual = await users.findById(id);
    console.log(userindividual);
    res.status(200).json(userindividual);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error." });
  }
});

router.patch("/updateuser/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const updateduser = await users.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    console.log(updateduser);
    res.status(200).json(updateduser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error." });
  }
});

router.delete("/deleteuser/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deleteuser = await users.findByIdAndDelete(id);
    console.log(deleteuser);
    res.status(200).json(deleteuser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error." });
  }
});

module.exports = router;
