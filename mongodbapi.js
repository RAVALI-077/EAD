const express = require('express');
const mongoose = require('mongoose');
const Student = require('./model');

const app = express();
app.use(express.json());


mongoose.connect('mongodb://127.0.0.1:27017/studentDB')
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));


app.get('/students', async (req, res) => {
  const data = await Student.find();
  res.json(data);
});



app.post('/students', async (req, res) => {
  const student = new Student(req.body);
  const saved = await student.save();
  res.json(saved);
});



app.put('/students/:id', async (req, res) => {
  const updated = await Student.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updated);
});



app.delete('/students/:id', async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted successfully" });
});


app.listen(3000, () => console.log("Server running on port 3000"));