import React, { useEffect, useState } from 'react';
import { fetchStudents, deleteStudent } from '../services/api';

const StudentList = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        fetchStudents().then(response => setStudents(response.data));
    }, []);

    const handleDelete = async (id) => {
        await deleteStudent(id);
        setStudents(students.filter(student => student.id !== id));
    };

    return (
        <table className="table mt-3">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Age</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {students.map(student => (
                    <tr key={student.id}>
                        <td>{student.id}</td>
                        <td>{student.name}</td>
                        <td><img src={`http://localhost:5000/${student.image}`} width="50" alt="student" /></td>
                        <td>{student.age}</td>
                        <td>{student.status}</td>
                        <td>
                            <button className="btn btn-danger" onClick={() => handleDelete(student.id)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default StudentList;
