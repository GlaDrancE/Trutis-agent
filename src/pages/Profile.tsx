import React, { useEffect, useState } from "react";
import { BottomNav } from "../components/BottomNav";
import { getAgentProfile, updateAgentStatus } from "../../services/api";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { handleLogout } from "../utils/logout";
import { LogOut } from "lucide-react";

interface Agent {
  name: string;
  email: string;
  createdAt: string;
  totalVerifications: string;
  isActive: boolean;
}

export const Profile = () => {
  const [agentInfo, setAgentInfo] = useState<Agent | null>(null);
  const [isActive, setIsActive] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAgentDetails = async () => {
      const agentId = localStorage.getItem("agentId");

      if (!agentId) {
        toast.error("Please Login Again!");
        return;
      }

      try {
        const response = await getAgentProfile(agentId);

        if (response.status === 200) {
          setAgentInfo(response.data);
          setIsActive(response.data.isActive);
        } else {
          toast.error("Failed to fetch profile");
        }
      } catch (error) {
        console.error("Error fetching agent details:", error);
        toast.error("Something went wrong!");
      }
    };

    fetchAgentDetails();
  }, []);

  const handleStatusToggle = async () => {
    if (!agentInfo) return;

    const newStatus = !isActive;
    setIsActive(newStatus);

    try {
      const response = await updateAgentStatus(localStorage.getItem("agentId")!, newStatus);

      if (response.status == 200) {
        toast.success("Status updated");
      } else {
        throw new Error(response.data.message);
      }
    } catch (error) {
      console.error("Error updating status:", error);
      toast.error("Failed to update status");
      setIsActive(!newStatus);
    }
  };


  return (
    <div className="pb-20 bg-gray-50 min-h-screen">
      <div className="bg-blue-600 text-white p-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Agent Profile</h1>
        <button onClick={() => handleLogout(navigate)} className="text-white hover:text-gray-300 transition">
          <LogOut size={24} />
        </button>
      </div>

      <div className="p-4">
        {agentInfo ? (
          <>
            <div className="bg-white rounded-lg shadow-md p-4">
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl text-blue-600 font-bold">
                    {agentInfo.name.charAt(0)}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-gray-800">{agentInfo.name}</h2>
                <p className="text-gray-600">{agentInfo.email}</p>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                  <span className="font-medium">Status</span>
                  <div className="relative inline-block w-12 mr-2 align-middle select-none">
                    <input
                      type="checkbox"
                      checked={isActive}
                      onChange={handleStatusToggle}
                      className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                    />
                    <label
                      className={`toggle-label block overflow-hidden h-6 rounded-full cursor-pointer ${isActive ? "bg-blue-600" : "bg-gray-300"
                        }`}
                    ></label>
                  </div>
                </div>

                <div className="p-3 bg-gray-50 rounded">
                  <span className="font-medium">Total Verifications</span>
                  <p className="text-2xl font-bold text-blue-600 mt-1">{agentInfo.totalVerifications}</p>
                </div>

                <div className="p-3 bg-gray-50 rounded">
                  <span className="font-medium">Join Date</span>
                  <p className="text-gray-700 mt-1">
                    {new Date(agentInfo.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>
          </>
        ) : (
          <p className="text-gray-500 text-center">Loading agent details...</p>
        )}
      </div>
      <BottomNav />
    </div>
  );
};
