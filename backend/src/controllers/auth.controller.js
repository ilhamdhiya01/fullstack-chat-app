import bcrypt from "bcryptjs";
import cloudinary from "../lib/cloudinary.js";
import { generateToken } from "../lib/utils.js";
import User from "../models/user.model.js";

export const signup = async (req, res) => {
  const { email, password, fullName } = req.body;

  try {
    if (!fullName || !password || !email) {
      return res.status(400).json({
        message: "All fileds are require",
      });
    }

    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password must be at least 6 characters" });
    }

    const findUser = await User.findOne({ email });
    if (findUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const slat = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, slat);

    const newUser = new User({
      email,
      password: hashedPassword,
      fullName,
    });

    if (newUser) {
      // generate JWT token
      generateToken(newUser._id, res);
      await newUser.save();
      return res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        email: newUser.email,
        profilePic: newUser.profilePic,
      });
    } else {
      return res.status(400).json({ message: "User not created" });
    }
  } catch (error) {
    console.log("Error in signup controller", error.message);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res.status(400).json({
        message: "All fileds are require",
      });
    }

    const findUser = await User.findOne({ email });

    if (!findUser) {
      return res.status(400).json({
        message: "Email is not registered",
      });
    }

    const isMatchPassword = await bcrypt.compare(password, findUser.password);

    if (!isMatchPassword) {
      return res.status(400).json({
        message: "Password is incorrect",
      });
    }

    generateToken(findUser._id, res);

    return res.status(200).json({
      _id: findUser._id,
      fullName: findUser.fullName,
      email: findUser.email,
      profilePic: findUser.profilePic,
    });
  } catch (error) {
    console.log("Error in signup controller", error.message);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

export const logout = (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.log("Error in signup controller", error.message);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

export const updateProfile = async (req, res) => {
  try {
    const { profilePic } = req.body;
    const userId = req.user._id;
    if (!profilePic) {
      return res.status(400).json({ message: "Profile picture is require" });
    }

    const uploaded = await cloudinary.uploader.upload(profilePic);
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { profilePic: uploaded.secure_url },
      { new: true }
    );

    res.status(200).json(updatedUser);
  } catch (error) {
    console.log("Error in  update profile controller", error.message);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

export const checkAuth = async (req, res) => {
  try {
    const { user } = req;
    res.status(200).json(user);
  } catch (error) {
    console.log("Error in check auth controller", error.message);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};
