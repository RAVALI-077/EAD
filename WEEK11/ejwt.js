const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json());

const SECRET_KEY = "mysecretkey";


app.post('/login', (req, res) => {
  const { username, password } = req.body;

  
  if (username === "admin" && password === "1234") {
    const token = jwt.sign(
      { user: username },
      SECRET_KEY,
      { expiresIn: "1h" }
    );

    return res.json({ message: "Login successful", token });
  } else {
    return res.status(401).json({ message: "Invalid credentials" });
  }
});


function verifyToken(req, res, next) {
  const header = req.headers['authorization'];

  if (!header) {
    return res.status(403).json({ message: "Token required" });
  }

  try {
    const token = header.split(" ")[1]; // Bearer token
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
}


app.get('/dashboard', verifyToken, (req, res) => {
  res.json({
    message: "Welcome to Dashboard",
    user: req.user
  });
});

app.listen(4000, () => console.log("Server running on port 4000"));
