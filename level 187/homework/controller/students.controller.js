const fs = require("fs");
let students = JSON.parse(fs.readFileSync("./data/students.json", "utf-8"));

const getStudents = (req, res) => {
    if(Object.keys(req.query).length == 0){
        return res.status(200).json(students);
    }
    if((Object.keys(req.query).length === 1 && Object.keys(req.query)[0] !== "grade") || (Object.keys(req.query).length === 2 && (!Object.keys(req.query).includes("minGrade") || !Object.keys(req.query).includes("maxGrade"))) || (Object.keys(req.query).length !== 1 && Object.keys(req.query).length !== 2)){
        return res.status(400).send("wrong grade info")
    }
    
    if(Object.keys(req.query).length === 1){
        const grade = parseInt(req.query.grade)
        const filtStudents = students.filter(student => student.grade == grade)
        return res.status(200).json(filtStudents)
    }
    const minGrade = parseInt(req.query.minGrade)
    const maxGrade = parseInt(req.query.maxGrade)
    const filtStudents = students.filter(student => student.grade >= minGrade && student.grade <= maxGrade)
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
    if(Object.keys(req.query).length !== 2 || !Object.keys(req.query).includes("fullname") || !Object.keys(req.query).includes("grade")){
        return res.status(400).send("wrong student info")
    }
    const grade = parseInt(req.query.grade)
    if(isNaN(grade) || grade < 0 || grade > 100){
        return res.status(400).send("grade must be a number from 0 to 100")
    }
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
    if(isNaN(grade) || grade < 0 || grade > 100){
        return res.status(400).send("grade must be a number from 0 to 100")
    }

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