import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import StudentForm from './components/StudentForm';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/student/add" element={<StudentForm />} />
                <Route path="/student/edit/:id" element={<StudentForm />} />
            </Routes>
        </Router>
    );
};

export default App;
