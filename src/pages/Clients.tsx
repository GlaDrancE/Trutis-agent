import React, { useEffect, useState } from "react";
import { BottomNav } from "../components/BottomNav";
import { getAgentClients } from "../../services/api";
import toast from "react-hot-toast";
import { LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { handleLogout } from "../utils/logout";

interface Client {
  id: string;
  shop_name: string;
  owner_name: string;
}

interface AgentClient {
  id: string;
  client: Client;
  createdAt: string;
}

export const Clients = () => {
  const [completedClients, setCompletedClients] = useState<AgentClient[]>([]);
  const [milestone, setMilestone] = useState({ current: 0, target: 20 });

  const navigate = useNavigate();

  useEffect(() => {
    const fetchClients = async () => {
      const agentId = localStorage.getItem("agentId");

      if (!agentId) {
        console.error("Agent ID not found in localStorage");
        toast.error("Something Went Wrong!");
        return;
      }

      try {
        const response = await getAgentClients(agentId);

        if (response.status === 200) {
          setCompletedClients(response.data);
          setMilestone((prev) => ({
            ...prev,
            current: response.data.length,
          }));
        }
      } catch (error) {
        console.error("Error fetching agent clients:", error);
      }
    };

    fetchClients();
  }, []);

  return (
    <div className="pb-20 bg-gray-50 min-h-screen">

      <div className="bg-blue-600 text-white p-6 shadow-md flex items-center justify-between">
        <h1 className="text-2xl font-bold">Clients & Milestones</h1>
        <button
          onClick={() => handleLogout(navigate)}
          className="text-white hover:text-gray-300 transition"
        >
          <LogOut size={24} />
        </button>
      </div>

      <div className="p-4">

        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">Current Milestone</h2>
          <div className="relative pt-1">
            <div className="flex mb-2 items-center justify-between">
              <span className="text-sm font-semibold text-blue-600">
                {((milestone.current / milestone.target) * 100).toFixed(0)}%
              </span>
              <span className="text-sm font-semibold text-blue-600">
                {milestone.current}/{milestone.target} Clients
              </span>
            </div>
            <div className="w-full h-3 bg-gray-200 rounded-full">
              <div
                style={{ width: `${(milestone.current / milestone.target) * 100}%` }}
                className="h-full bg-blue-600 rounded-full"
              ></div>
            </div>
          </div>
        </div>


        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Completed Clients</h2>
          <div className="divide-y divide-gray-200">
            {completedClients.length > 0 ? (
              completedClients.map((client) => (
                <div key={client.id} className="py-4 flex items-center">
                  <div className="flex-1">
                    <h3 className="text-md font-medium text-gray-900">{client.client.shop_name}</h3>
                    <p className="text-sm text-gray-500">Owned by: {client.client.owner_name}</p>
                    <p className="text-xs text-gray-400">Verified on {new Date(client.createdAt).toLocaleDateString()}</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-center py-4">No clients linked yet.</p>
            )}
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};
