import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard/:orgId/funnel" element={<Dashboard />} />
        <Route path="/dashboard/:orgId/notes" element={<Dashboard />} />
        
      </Routes>
    </Router>
  );
}

export default AppRouter;