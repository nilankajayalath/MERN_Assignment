import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { addStudent, updateStudent, fetchStudents } from '../services/api';

const StudentForm = () => {
    const [formData, setFormData] = useState({
        id: '',
        name: '',
        age: '',
        status: 'Active',
        image: null
    });

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            // Fetch student details if editing
            fetchStudents().then(response => {
                const student = response.data.find(s => s.id === id);
                if (student) {
                    setFormData({
                        id: student.id,
                        name: student.name,
                        age: student.age,
                        status: student.status,
                        image: null
                    });
                }
            });
        }
    }, [id]);

    const handleChange = (e) => {
        if (e.target.name === "image") {
            setFormData({ ...formData, image: e.target.files[0] });
        } else {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append("id", formData.id);
        data.append("name", formData.name);
        data.append("age", formData.age);
        data.append("status", formData.status);
        if (formData.image) {
            data.append("image", formData.image);
        }

        try {
            if (id) {
                await updateStudent(id, data);
            } else {
                await addStudent(data);
            }
            navigate('/dashboard');
        } catch (error) {
            console.error("Error saving student:", error);
        }
    };

    return (
        <div className="container mt-4">
            <h2>{id ? "Edit Student" : "Add New Student"}</h2>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="mb-3">
                    <label className="form-label">ID</label>
                    <input type="text" name="id" className="form-control" value={formData.id} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" name="name" className="form-control" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Age</label>
                    <input type="number" name="age" className="form-control" value={formData.age} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Status</label>
                    <select name="status" className="form-control" value={formData.status} onChange={handleChange}>
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label className="form-label">Image</label>
                    <input type="file" name="image" className="form-control" onChange={handleChange} />
                </div>
                <button type="submit" className="btn btn-success">{id ? "Update Student" : "Add Student"}</button>
            </form>
        </div>
    );
};

export default StudentForm;
