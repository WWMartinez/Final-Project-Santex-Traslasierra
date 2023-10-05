// const jwt = require("jsonwebtoken");
// require("dotenv").config();

// const validateToken = (req, res, next) => {
//   const accessToken = req.headers["authorization"];
//   console.log("ACA TOKEN", accessToken)

//   if (!accessToken || !accessToken.startsWith("Bearer ")) {
//     res.status(401).json({ message: "User not authenticated" });
//   }
//   const token = accessToken.split(" ")[1];
//   try {
//     const validToken = jwt.verify(token, process.env.SECRET_KEY);
//     if (validToken) {
//       return next();
//     }
//   } catch (error) {
//     res.status(401).json({ message: "Invalid token", error: error.message });
//   }
// };

// module.exports = validateToken;
