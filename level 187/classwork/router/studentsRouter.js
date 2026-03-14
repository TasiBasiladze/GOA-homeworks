const express = require("express");
const { getStudents, getStudent, addStudent, changeGrade, deleteStudent, } = require("../controller/students.controller");
const studentsRouter = express.Router();

studentsRouter.get("/", getStudents);
studentsRouter.get("/:id", getStudent);
studentsRouter.post("/add", addStudent);
studentsRouter.patch("/change/:id", changeGrade);
studentsRouter.delete("/delete/:id", deleteStudent);

module.exports = studentsRouter;