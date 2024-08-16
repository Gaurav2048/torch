import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Settings from '../pages/Settings';

const AppRouter: React.FC = () => {
    const orgId = '66beb38e168efaf09cb836bd' // Need to change to local storage later

    return (
        <Router>
            <Routes>
                <Route path='/' element={<Navigate to={`/dashboard/${orgId}/funnel`} />} />
                <Route path="/dashboard/*" element={<Dashboard />} />
                <Route path="/settings/*" element={<Settings />} />
            </Routes>
        </Router>
    );
}

export default AppRouter;