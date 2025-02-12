import React, { useEffect, useState } from 'react';
import { UserCheck } from 'lucide-react';
import { BottomNav } from '../components/BottomNav';
import { searchClient, linkQRCode } from '../../../services/api'
import axios from 'axios';
import { useNavigate, useSearchParams } from 'react-router-dom';
import toast from 'react-hot-toast'
import { jwtDecode } from 'jwt-decode';

const getAgentIdFromToken = () => {
  const token = localStorage.getItem('token');
  if (!token) return null;

  try {
    const decoded: any = jwtDecode(token);
    return decoded.id;
  } catch (error) {
    console.error("Invalid token:", error);
    return null;
  }
};


export const VerifyClient = () => {
  const [clientId, setClientId] = useState('');
  const [QRId, setQRId] = useState('');
  const [clientDetails, setClientDetails] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [searchParams, _setSearchParams] = useSearchParams();
  const navigate = useNavigate();


  useEffect(() => {
    const public_key = searchParams.get('c');
    setClientId(public_key as string)
  }, [])

  const handleSearch = async () => {
    setLoading(true);

    navigate(`/verify?c=${clientId}`)
    try {
      const response = await searchClient(clientId);
      setClientDetails(response.data);
    } catch (error) {
      toast.error("Client not found");
      console.error('Error fetching client details:', error);
    }
    setLoading(false);
  };

  const handleQRCode = async () => {
    if (!QRId) {
      toast.error("Please enter a valid QR ID");
      return;
    }

    const agentId = getAgentIdFromToken();
    if (!agentId) {
      toast.error("Agent authentication failed");
      return;
    }

    try {
      const response = await linkQRCode(clientId, QRId, agentId);

      if (response.status === 200) {
        console.log("Response:", response.data);
        toast.success("QR Code linked successfully!");
        navigate(`/client/${QRId}`)
      }
    } catch (error: any) {
      console.error("Error:", error);

      if (error.response) {
        if (error.response.status === 404) {
          toast.error("Invalid QR Code.");
        } else if (error.response.status === 400) {
          toast.error(error.response.data.error || "Client ID and QR ID are required.");
        } else {
          toast.error(error.response.data.error || "Failed to link QR Code.");
        }
      } else {
        toast.error("Network error, please try again.");
      }
    }
  };


  return (
    <div className="pb-20 bg-gray-50 min-h-screen">
      <div className="bg-blue-600 text-white p-6">
        <h1 className="text-2xl font-bold">Verify Client</h1>
      </div>

      <div className="p-4">
        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Client ID
            </label>
            <input
              type="text"
              value={clientId}
              onChange={(e) => setClientId(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter client ID"
            />
          </div>
          <button
            onClick={handleSearch}
            className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 mb-4"
            disabled={loading}
          >
            {loading ? 'Searching...' : 'Search Client'}
          </button>

          {clientDetails && (
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-4">Client Details</h3>
              <div className="space-y-3">
                <p><span className="font-medium">Shop Name:</span> {clientDetails.shop_name}</p>
                <p><span className="font-medium">Owner Name:</span> {clientDetails.owner_name}</p>
                <p><span className="font-medium">Email:</span> {clientDetails.email}</p>
                <p><span className="font-medium">Address:</span> {clientDetails.address}</p>
                <p><span className="font-medium">Phone:</span> {clientDetails.phone}</p>
                <p><span className="font-medium">Image:</span> <img src={clientDetails.logo} alt="" /></p>
                <p><span className="font-medium">Google API:</span> {clientDetails.googleAPI}</p>


                <input
                  type="text"
                  value={QRId}
                  onChange={(e) => setQRId(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter QR ID"
                />
                <button
                  onClick={handleQRCode}
                  className="w-full bg-green-600 text-white p-3 rounded-lg font-semibold hover:bg-green-700 flex items-center justify-center gap-2"
                >

                  <UserCheck size={20} />
                  Link QR
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <BottomNav />
    </div>
  );
};