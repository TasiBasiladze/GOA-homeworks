import { useState } from "react";

const App = () => {
    const [studentsList, setStudentsList] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, grade } = e.target;

        setStudentsList(prev => [...prev, { id: Date.now(), name: name.value, grade: grade.value }]);
    }

    const handleDelete = (delId) => {
        setStudentsList(prev => prev.filter(curValue => curValue.id !== delId));
    }

    console.log(studentsList);

    return (
        <main>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label> <br />
                <input type="text" name="name" id="name" placeholder="Enter student name" required />
                <br /><br />
                <label htmlFor="grade">Grade:</label> <br />
                <input type="text" name="grade" id="grade" placeholder="Enter students grade" required />
                <br /><br />
                <button>Add Student</button>
            </form>

            <br /><br />
            <h3>Studetns List</h3>

            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Grade</th>
                        <th>Del</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        studentsList.map((curValue, index) => {
                            return (
                                <tr key={index}>
                                    <td>{curValue.id}</td>
                                    <td>{curValue.name}</td>
                                    <td>{curValue.grade}</td>
                                    <td><button onClick={() => handleDelete(curValue.id)}>Delete</button></td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </main>
    );
}

export default App;
