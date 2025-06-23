import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Importing individual page components
import HomePage from './components/Home/home.jsx';
import AboutPage from './components/About/About.jsx';
import ServicesPage from './components/cateogory/category.jsx';
import ContactPage from './components/contact/contact.jsx';
import MainLayout from './Layout.jsx';

// Define all routes using React Router
const appRoutes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '', element: <HomePage /> },
      { path: '/about', element: <AboutPage /> },
      { path: '/services', element: <ServicesPage /> },
      { path: '/contact', element: <ContactPage /> },
    ],
  },
]);

// Initialize the React App
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRoutes} />
  </StrictMode>
);
