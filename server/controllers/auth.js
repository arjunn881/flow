import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

import User from "../models/auth.js";
export const signup = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      return res.status(404).json({ message: "User already Exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = await User.create({
      name : "",
      email : "",
      password: hashedPassword,
    });
    const token = jwt.sign({ email: newUser.email, id: newUser._id }, "test", {
      expiresIn: "1h",
    });

    res.status(200).json({ result: newUser, token });
  } catch (error) {
    res.status(500).json("something went wrong");
  }
};
export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
      const existingUser = await User.findOne({ email });
  
      if (!existingUser) {
        return res.status(404).json({ message: "User doesn't Exists" });
      }
      const isPasswordCrt = await bcrypt.compare(password, existingUser.password);
      if(!isPasswordCrt){
        return res.status(400).json({message : "Invalid Credentials"})
      }

      const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, "test", {
        expiresIn: "1h",
      });
  
      res.status(200).json({ result: existingUser, token });

    } catch (error) {
      res.status(500).json("something went wrong");
    }
};
