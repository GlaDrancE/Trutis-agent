import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import { loginAgent } from '../../../services/api';
import toast from 'react-hot-toast'
import { jwtDecode } from 'jwt-decode';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);

  useEffect(() => {
    redirectHome();
  }, [])
  const redirectHome = () => {
    const token = localStorage.getItem('token');
    const currentDate = Date.now() / 1000;
    if (token) {
      const decodeToken = jwtDecode(token);
      if (decodeToken.exp && decodeToken.exp > currentDate) {
        navigate('/')
      }
    }
  }
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {


      const response = await loginAgent(email, password)
      console.log(response)
      if (response.status !== 200) {
        toast.error("Invalid Credentials")
        return;
      }
      localStorage.setItem("token", response.data.token)
      navigate('/')
    } catch (error) {
      console.error(error)
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center px-4">
      <div className="max-w-md w-full mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-blue-600">Agent Portal</h2>
          <p className="text-gray-600 mt-2">Sign in to your account</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};