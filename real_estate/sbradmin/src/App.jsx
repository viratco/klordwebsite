import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import LoginPage from './pages/LoginPage';
import AddPropertyPage from './pages/AddPropertyPage';
import LeadsPage from './pages/LeadsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />

        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Navigate to="/add-property" replace />} /> {/* Default to Add Property for now */}
          <Route path="add-property" element={<AddPropertyPage />} />
          <Route path="leads" element={<LeadsPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
