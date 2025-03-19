import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="container mt-4">
            <h2>Admin Dashboard</h2>
            <Link to="/student/add" className="btn btn-primary mb-3">Add Student</Link>
            <StudentList />
        </div>
    );
};
