import express from "express";
const router = express();
import pool from "./db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
// To use .env file to load the setting
dotenv.config();

// POST: Register
router.post("/register", async (req, res) => {
  // Validation
  if (
    req.body.name.length === 0 ||
    req.body.email.length === 0 ||
    req.body.password.length === 0
  ) {
    return res.json({ Error: "Something is empty!" });
  }

  // Hash password
  bcrypt.hash(req.body.password, process.env.SELT, (err, hashpassword) => {
    if (err) return res.json({ Error: "Error for hassing passowrd" });

    // Convert Object values to array
    const values = [req.body.name, req.body.email, hashpassword];

    // Query for
    const query =
      "INSERT INTO login (`name`, `email`, `password`) VALUES (?,?,?)";

    // Insert Query
    pool.query(query, values, (err, result) => {
      if (err) {
        return res.json({ Error: "Inserting data Error in server" });
      }
      return res.json({ Status: "Success", isSuccess: true });
    });
  });
});

//POST: Login Post
router.post("/login", async (req, res) => {
  const query = "SELECT * FROM login WHERE email = ?";
  const value = [req.body.email];

  pool.query(query, value, async (err, data) => {
    if (err) {
      return res.json({ Error: "There is something error" });
    }

    if (data.length > 0) {
      const passwordCompare = await bcrypt.compareSync(
        req.body.password.toString(),
        data[0].password
      );

      if (!passwordCompare) {
        return res.status(400).json({ Error: "Login with proper credentials" });
      }

      const payload = { ...data[0] };

      // Make token
      const token = jwt.sign(payload, process.env.SECRET_KEY, {
        expiresIn: "1d"
      });

      // Set Storage Cookies in client-side
      res.cookie("token", token, {
        httpOnly: true, // Cannot be accessed via JavaScript
        secure: true, // Only sent over HTTPS
        sameSite: "Strict" // Helps prevent CSRF
      });
      return res.json({ Status: "Success" });
    } else {
      return res.status(400).json({ Error: "Login with proper credentials" });
    }
  });
});

// Verify use if use is authorized
const verifyUser = (req, res, next) => {
  // here not cookie but cookies
  const token = req.cookies.token;
  if (!token) {
    return res.json({ Error: "You are not authorized." });
  }

  jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    if (err) return res.json({ Error: "Token is not okay" });

    // give parameter to response
    req.name = decoded.name;

    // pass next request
    next();
  });
};
router.get("/", verifyUser, (req, res) => {
  return res.json({ Status: "Success", name: req.name });
});

router.get("/logout", (req, res) => {
  res.clearCookie("token");
  return res.json({ Status: "Success" });
});

//export this router to use in our index.js
export default router;

//Usage of jwt token
// const jwt = require('jsonwebtoken');
// // Your secret key (keep it secure)
// const secretKey = 'your-very-secret-key';

// // User data to include in the token (payload)
// const payload = {
//   id: 123,
//   username: 'exampleUser',
//   email: 'user@example.com',
//   // You can add any other user-related data
// };

// // Options (optional), such as setting the token's expiration time
// const options = {
//   expiresIn: '1h', // Token will expire in 1 hour
// };

// // Create the token
// const token = jwt.sign(payload, secretKey, options);
