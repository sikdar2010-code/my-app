import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 10000;

// TEST ROUTE
app.get('/', (req, res) => {
  res.send('Backend Running');
});

// PROFILES API
app.get('/profiles', (req, res) => {
  res.json([
    { name: "Rahul Sharma", age: 28, city: "Kolkata" },
    { name: "Priya Das", age: 25, city: "Delhi" },
    { name: "Amit Roy", age: 30, city: "Mumbai" }
  ]);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
