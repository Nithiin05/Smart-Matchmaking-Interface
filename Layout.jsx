import React from 'react';
import { Outlet } from 'react-router-dom';

// Global layout components
import Header from './components/header/header';
import Footer from './components/footer/footer';

// Main layout structure with header and footer
const MainLayout = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <main style={{ minHeight: '80vh' }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
