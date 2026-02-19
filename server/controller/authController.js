import usermodel from "../models/usermodel.js";
import { hashpassword, comparepassword } from "../helper/authHelper.js";
import JWT from "jsonwebtoken";


// ================= REGISTER =================

export const registerController = async (req, res) => {

  const { name, email, password, phone, address, answer } = req.body;

  if (!name || !email || !phone || !address || !password || !answer) {
    return res.status(422).json({
      success: false,
      message: "plz fill all field"
    });
  }

  try {

    const useExist = await usermodel.findOne({ email: email });

    if (useExist) {
      return res.status(422).json({
        success: false,
        message: "email already exist"
      });
    }

    const hashedpassword = await hashpassword(password);

    const user = new usermodel({
      name,
      email,
      password: hashedpassword,
      phone,
      address,
      answer
    });

    const usserregistered = await user.save();

    if (usserregistered) {
      return res.status(201).json({
        success: true,
        message: "user registered successfully"
      });
    }

  } catch (error) {

    console.log(error);

    return res.status(500).json({
      success: false,
      message: "error in register",
      error
    });

  }

};


// ================= LOGIN =================

export const loginController = async (req, res) => {

  try {

    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(404).send({
        success: false,
        message: "invalid email or password",
      });
    }

    const user = await usermodel.findOne({ email: email });

    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Email is not registerd",
      });
    }

    const match = await comparepassword(password, user.password);

    if (!match) {
      return res.status(401).send({
        success: false,
        message: "invalid password",
      });
    }

    //  TOKEN 
    const token = JWT.sign(
      { _id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );
  console.log(token);
    return res.status(200).send({
      success: true,
      message: "login successfully",
      user: {
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address,
        role: user.role,
      },
      token,
    });

  } catch (error) {

    console.log(error);

    return res.status(500).send({
      success: false,
      message: "error in login",
      error,
    });

  }

};

// ================= TEST CONTROLLER =================
export const testController = (req, res) => {
  try {
    res.send("Protected Route");
  } catch (error) {
    console.log(error);
    res.send({ error });
  }
};


// ================= FORGOT PASSWORD =================

export const forgotPasswordController = async (req, res) => {

  try {

    const { email, answer, newPassword } = req.body;

    if (!email || !answer || !newPassword) {
      return res.status(400).send({
        success: false,
        message: "plz provide all details",
      });
    }

    const user = await usermodel.findOne({ email, answer });

    if (!user) {
      return res.status(404).send({
        success: false,
        message: "wrong email or answer",
      });
    }

    const hashed = await hashpassword(newPassword);

    await usermodel.findByIdAndUpdate(user._id, {
      password: hashed,
    });

    return res.status(200).send({
      success: true,
      message: "password reset successfully",
    });

  } catch (error) {

    console.log(error);

    return res.status(500).send({
      success: false,
      message: "error in forgot password",
      error,
    });

  }

};
