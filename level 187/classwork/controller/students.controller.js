const fs = require("fs");
let students = JSON.parse(fs.readFileSync("./data/students.json", "utf-8"));

const getStudents = (req, res) => {
    if(Object.keys(req.query).length == 0){
        return res.status(200).json(students);
    }
    if(Object.keys(req.query).length !== 1 || Object.keys(req.query)[0] !== "grade"){
        return res.status(400).send("wrong grade info")
    }
    const grade = parseInt(req.query.grade)
    const filtStudents = students.filter(student => student.grade == grade)
    res.status(200).json(filtStudents)
    res.status(200).json(filtStudents)
}

const getStudent = (req, res) => {
    const index = students.findIndex(student => student.id == req.params.id);
    if(index == -1){
        return res.status(404).send("student not found")
    }
    res.status(200).json(students[index]);
}

const addStudent = (req, res) => {
    if(Object.keys(req.query).length !== 2){
        return res.status(400).send("wrong student info")
    }
    const grade = parseInt(req.query.grade)
    students.push(
        {
            id: students.length == 0 ? 1 : students.at(-1).id + 1,
            fullname: req.query.fullname,
            grade: grade
        }
    )
    students.sort((a, b) => b.grade - a.grade);
    fs.writeFileSync("./data/students.json", JSON.stringify(students))
    res.status(200).send("student added successfully")
}

const changeGrade = (req, res) => {
    const index = students.findIndex(student => student.id == req.params.id);
    if(Object.keys(req.query).length !== 1 || Object.keys(req.query)[0] !== "grade"){
        return res.status(400).send("wrong grade info")
    }
    if(index == -1){
        return res.status(400).send("student not found")
    }
    
    const grade = parseInt(req.query.grade);
    
    students[index] = {...students[index], grade: grade}
    fs.writeFileSync("./data/students.json", JSON.stringify(students))
    res.status(200).send("grade changed successfully")
}

const deleteStudent = (req, res) => {
        const index = students.findIndex(student => student.id == req.params.id);
        if(index == -1){
            return res.status(400).send("student not found")
        }
        students.splice(index, 1);
        fs.writeFileSync("./data/students.json", JSON.stringify(students))
        res.status(200).send("students deleted successfully")
    }

module.exports = { getStudents, getStudent, addStudent, changeGrade, deleteStudent }