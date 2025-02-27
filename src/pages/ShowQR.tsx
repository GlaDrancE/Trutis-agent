import React from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import { useParams, useNavigate } from 'react-router-dom';
import { BottomNav } from '../components/BottomNav';
import { handleLogout } from '../utils/logout';
import { LogOut } from 'lucide-react';

export const ShowQR = () => {
    const { private_key } = useParams();
    const navigate = useNavigate();
    const formBaseUrl = import.meta.env.VITE_FORM_BASE_URL;

    return (
        <div className='min-h-screen'>
            <div className="bg-blue-600 text-white p-6 flex justify-between items-center">
                <h1 className="text-2xl font-bold">Agent Profile</h1>
                <button
                    onClick={() => handleLogout(navigate)}
                    className="text-white hover:text-gray-300 transition"
                >
                    <LogOut size={24} />
                </button>
            </div>

            <div className='flex flex-col items-center justify-center w-full h-full mt-16'>
                <QRCodeCanvas value={`${formBaseUrl}/${private_key}`} size={200} />
                <div className="mt-4 text-lg">
                    <strong>Private Key: </strong> {private_key}
                </div>
            </div>

            <BottomNav />
        </div>
    );
};
