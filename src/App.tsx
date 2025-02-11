import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { Login } from './pages/Login';
import { Dashboard } from './pages/Dashboard';
import { VerifyClient } from './pages/VerifyClient';
import { Clients } from './pages/Clients';
import { Profile } from './pages/Profile';
import { jwtDecode } from 'jwt-decode'
import { useAuthStore } from './store/authStore';
import { ShowQR } from './pages/ShowQR';
import { QRCodeProvider } from './hooks/qrCodePrivateKey'

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const token = localStorage.getItem('token');
  const currentDate = Date.now() / 1000;
  if (token) {
    const decodeToken = jwtDecode(token);
    if (decodeToken.exp && decodeToken.exp > currentDate) {
      return <>
        {children}
      </>
    }
  }
  return <Navigate to="/login" />;
};

function App() {
  return (
    <Router>
      <QRCodeProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />

          <Route
            path="/verify"
            element={
              <PrivateRoute>
                <VerifyClient />
              </PrivateRoute>
            }
          />

          <Route
            path="/clients"
            element={
              <PrivateRoute>
                <Clients />
              </PrivateRoute>
            }
          />

          <Route
            path="/client/:private_key"
            element={
              <PrivateRoute>
                <ShowQR />
              </PrivateRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </QRCodeProvider>
    </Router>
  );
}

export default App;