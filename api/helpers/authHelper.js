const bcrypt = require("bcrypt");
const crypto = require("crypto");
const nodemailer = require("nodemailer");
// const { Alert } = require("react-native");
exports.hashPassword = async (password) => {
  try {
    const hashedPassword = await bcrypt.hash(password, 5);
    return hashedPassword;
  } catch (error) {
    console.log(error);
  }
};
exports.comparePassword = async (password, hashedPassword) => {
  return await bcrypt.compare(password, hashedPassword);
};

exports.sendVerification = async (email, verifcationToken) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: "monishthirukachi@gmail.com", pass: "zshb hnzo ktnb lvbu" },
  });
  const mailOptions = {
    from: "amazon.com",
    to: email,
    subject: "Email Verification",
    text: `Please click the following link to verify your email: http://192.168.43.74:8000/api/v1/auth/verify/${verifcationToken}`,
  };
  try {
    await transporter.sendMail(mailOptions);
    console.log("Verification email sent successfully");
  } catch (error) {
    console.error("Error sending verification email:", error);
  }
};

exports.generateSecretKey = () => {
  const secretKey = crypto.randomBytes(32).toString("hex");
  return secretKey;
};
