import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Settings from '../pages/Settings';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="/settings/*" element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;