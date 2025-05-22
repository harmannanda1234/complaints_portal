const jwt = require("jsonwebtoken");

const adminrole = (req, res, next) => {
  const tokenheader = req.headers["authorization"];

  if (!tokenheader) {
    return res.status(401).json({ message: "No token found" });
  }

  const token = tokenheader.split(" ")[1];
  if (!token) {
    return res.status(400).json({ message: "Invalid token format" });
  }

  jwt.verify(token, "secret", (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: "Invalid token" });
    }

    if (decoded["role"] === "admin") {
      return next(); 
    } else {
      return res.status(403).json({ message: "Access not granted" });
    }
  });
};

module.exports = adminrole;
