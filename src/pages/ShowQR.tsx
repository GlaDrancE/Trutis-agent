import React from 'react'
import { QRCodeCanvas } from 'qrcode.react'
import { useParams } from 'react-router-dom'
import { BottomNav } from '../components/BottomNav';
export const ShowQR = () => {

    const { private_key } = useParams();

    return (
        <div className='min-h-screen'>
            <div className="bg-blue-600 text-white p-6">
                <h1 className="text-2xl font-bold">Agent Profile</h1>
            </div>
            <div className='flex flex-col items-center justify-center w-full h-full mt-16'>

                <QRCodeCanvas value={`http://localhost:3000/${private_key}`} size={200} />

                <div>
                    <strong>Private Key: </strong> {private_key}
                </div>
            </div>
            <BottomNav />
        </div>

    )
}
