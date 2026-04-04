const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

const users = [
  { id: 1, name: "John Doe", email: "john@example.com", coffee: "Espresso", created_at: "2024-01-15", status: "Active" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", coffee: "Latte", created_at: "2024-02-20", status: "Active" },
  { id: 3, name: "Mike Johnson", email: "mike@example.com", coffee: "Cappuccino", created_at: "2024-03-10", status: "Inactive" },
  { id: 4, name: "Sarah Wilson", email: "sarah@example.com", coffee: "Mocha", created_at: "2024-03-25", status: "Active" },
  { id: 5, name: "Tom Brown", email: "tom@example.com", coffee: "Americano", created_at: "2024-04-01", status: "Active" },
];

app.get('/api/staff', (req, res) => {
  res.json(users);
});

app.listen(PORT, () => {
  console.log(`Mock API server running on http://localhost:${PORT}`);
});