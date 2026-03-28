import express from "express";
import cors from "cors";

const app = express();

app.use(cors({
  origin: "*"
}));

app.use(express.json());

app.post("/api/auth/register", (req, res) => {
  res.json({ message: "Register working" });
});

app.post("/api/auth/login", (req, res) => {
  res.json({ message: "Login working", token: "demo-token" });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
