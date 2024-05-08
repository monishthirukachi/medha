const user = require("../models/user");
const dotenv = require("dotenv");
const crypto = require("crypto");
const {
  hashPassword,
  comparePassword,
  sendVerification,
  generateSecretKey,
} = require("../helpers/authHelper");
const jwt = require("jsonwebtoken");
const pokemons = require('json-pokemon');

dotenv.config();
exports.registerController = async (req, res) => {
  try {
    const { name, phone, email, password, role } = req.body;
    if (!name) {
      return res.send({ message: "name is required" });
    }
    if (!email) {
      return res.send({ message: "email is required" });
    }
    if (!password) {
      return res.send({ message: "password is required" });
    }
    if (!phone) {
      return res.send({ message: "phone-no  is required" });
    }
    if (!role) {
      return res.send({ message: "role should be selected" });
    }

    const existingUser = await user.findOne({ email });

    if (existingUser) {
      return res.status(200).send({
        success: false,
        message: "already existing user",
      });
    }

    const hashedPassword = await hashPassword(password);
    const newUser = new user({
      name,
      phone,
      email,
      password: hashedPassword,
      role,
    });
    newUser.verificationToken = crypto.randomBytes(20).toString("hex");
    await newUser.save();
    sendVerification(newUser.email, newUser.verificationToken);

    res.status(201).send({
      success: true,
      message: "registration successful",
      newUser,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error.message,
      error,
    });
  }
};

exports.loginController = async (req, res) => {
  // try {
  //   const { email, password } = req.body;

  //   //check if the user exists
  //   const user = await user.findOne({ email });
  //   if (!user) {
  //     return res.status(401).json({ message: "Invalid email or password" });
  //   }

  //   //check if the password is correct
  //   if (user.password !== password) {
  //     return res.status(401).json({ message: "Invalid password" });
  //   }

  //   //generate a token
  //   const token = jwt.sign({ userId: user._id }, generateSecretKey());

  //   res.status(200).json({ token });
  // } catch (error) {
  //   res.status(500).json({ message: "Login Failed" });
  // }
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(404).send({
        success: false,
        message: "error in email or password",
      });
    }

    const us = await user.findOne({ email });

    if (!user) {
      return res.status(404).send({
        success: false,
        message: "User is not registered",
      });
    }

    const checkPassword = await comparePassword(password, us?.password);
    if (!checkPassword) {
      console.log(checkPassword);
      return res.status(200).send({
        success: false,
        message: "invalid password",
      });
    }

    // const isVerified = user.verified;
    // if (!isVerified) {
    //   return res.status(200).send({
    //     success: false,
    //     message: "User isn't Verfied",
    //   });
    // }
    const token = await jwt.sign({ Userid: us._id }, process.env.JWT_SECRET, {
      expiresIn: "5d",
    });
    res.status(200).send({
      success: true,
      message: "succesfully logined",
      user: {
        name: us.name,
        phone: us.phone,
        email: us.email,
        role:us.role
      },
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: error.message,
    });
  }
};

exports.verifyController = async (req, res) => {
  try {
    const token = req.params.token;
    console.log(req.params);
    //Find the user witht the given verification token
    const usr = await user.findOne({ verificationToken: token });

    if (!usr) {
      return res.status(404).json({ usr });
    }

    //Mark the user as verified
    usr.verified = true;
    usr.verificationToken = undefined;

    await usr.save();

    res.status(200).json({ message: "Email verified successfully" });
  } catch (error) {
    res.status(500).json({ message: "Email Verificatioion Failed" });
  }
};
exports.userDetailsController = async (req, res) => {
  try {
    const col = await user.find({"role":"User"})
    res.status(200).send({
      success: true,
      data: col
    });
  } catch (error) {
    console.log(error)
  }
}

exports.permissionController = async (req, res) => {
  try {
    const {create,read,update,del,name}=req.body
    const u = await user.findOneAndUpdate({ name: name }, { Create: create, Read: read, Update: update, Delete: del});
    await u.save()
    res.status(200).send({
      success: true,
      message:"Permissions Updated"
    })
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error.message,
      error,
    });
  }
}

exports.profileController = async (req, res) => { 
  try {
    console.log(req.params)
    const Userid = req.params.name;
    console.log(Userid)
    const usr = await user.find({ "name": `${Userid}` })
    console.log(usr)

    if (!usr) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ usr });
  } catch (error) {
    res.status(500).json({ message: "Error retrieving the user profile" });
  }
}