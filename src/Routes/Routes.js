import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import LongRead from '../components/Pages/LongRead/LongRead';
import StartPage from '../components/Pages/StartPage/StartPage';

const AppRoutes = () => {
    return (
      <Router>
        <Routes>
        <Route path="/" element={<StartPage />} />
          <Route path="longread" element={<LongRead />} />
        </Routes>
      </Router>
    );
  }

  export default AppRoutes;