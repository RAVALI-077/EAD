const express = require('express');
const app = express();

app.use(express.json());


let students = [
  {
    name: "Ravi",
    rollNumber: 101,
    department: "CSE",
    marks: 90
  }
];


app.get('/', (req, res) => {
  res.send("Server is running");
});

app.get('/students', (req, res) => {
  res.json(students);
});

app.post('/students', (req, res) => {
  students.push(req.body);
  res.json({ message: "Student added", data: students });
});


app.put('/students/:roll', (req, res) => {
  try {
    const roll = req.params.roll;

    if (!req.body || Object.keys(req.body).length === 0) {
      return res.status(400).json({ message: "Body is missing" });
    }

    let found = false;

    students = students.map(s => {
      if (s.rollNumber == roll) {
        found = true;
        return { ...s, ...req.body };
      }
      return s;
    });

    if (!found) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.json({ message: "Updated successfully", data: students });

  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.delete('/students/:roll', (req, res) => {
  const roll = req.params.roll;

  students = students.filter(s => s.rollNumber != roll);

  res.json({ message: "Deleted", data: students });
});

app.listen(3000, () => console.log("Server running on port 3000"));
