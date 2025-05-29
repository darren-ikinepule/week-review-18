import express from 'express';
import mongoose from 'mongoose';

const app = express();
app.use(express.json());

// Connect to MongoDB Atlas
const uri = "mongodb+srv://darrenikinepule:Kohsamui08!@cluster0.mongodb.net/nz_ufc_test?retryWrites=true&w=majority";
mongoose.connect(uri);

// Define Student schema
const studentSchema = new mongoose.Schema({
  name: String,
  nickname: String,
  weightClass: String,
  wins: Number,
  losses: Number,
  isActive: Boolean,
  hometown: String,
  fightingStyles: [String],
  
});



const Student = mongoose.model('Student', studentSchema);

// API Endpoints
app.get('/studentSchema/fighters', async (req, res) => {
  const students = await Student.find();
  res.json(students);
});
app.get('/studentSchema//fighters/weightclass/:weightClass ', async (req, res) => {
  const students = await Student.find();
  res.json(students);
});

app.post('/studentSchema/fighters', async (req, res) => {
  const student = new Student(req.body);
  await student.save();
  res.json(student);
});

app.get('/studentSchema/:id', async (req, res) => {
  const student = await Student.findById(req.params.id);
  res.json(student);
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});