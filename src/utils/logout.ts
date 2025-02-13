import { NavigateFunction } from 'react-router-dom';
import toast from 'react-hot-toast';

export const handleLogout = (navigate: NavigateFunction) => {
  localStorage.removeItem("token");
  localStorage.removeItem("agentId");
  toast.success("Logout")
  navigate("/login");
};
