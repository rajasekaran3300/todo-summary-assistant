import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Login from './auth/Login';
import Signup from './auth/Signup';
import PrivateRoute from './PrivateRoute';

const RouterPage = () => (
  <Router>
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <App />
          </PrivateRoute>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  </Router>
);

export default RouterPage;
