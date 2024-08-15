import React from 'react';
import { Route, Routes } from 'react-router-dom';
import FunnelPage from '../pages/Dashboard/FunnelPage';
import Notes from '../pages/Notes';

const DashboardRoutes: React.FC = () => {
  return (
      <Routes>
        <Route path=":orgId/funnel" element={<FunnelPage />} />
        <Route path=":orgId/notes" element={<Notes />} />
        <Route path=":orgId/funnel/task/:columnId" element={<FunnelPage />} />
      </Routes>
  );
}

export default DashboardRoutes;