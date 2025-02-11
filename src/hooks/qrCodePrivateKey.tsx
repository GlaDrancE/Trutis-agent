import React, { createContext, useContext, ReactNode, useState } from 'react';

interface QRCodeContextType {
    privateKey: string;
    setPrivateKey: React.Dispatch<React.SetStateAction<string>>;
}

export const QRCodeContext = createContext<QRCodeContextType | undefined>(undefined);

interface QRCodeProviderProps {
    children: ReactNode;
}

export const QRCodeProvider: React.FC<QRCodeProviderProps> = ({ children }) => {
    const [privateKey, setPrivateKey] = useState<string>("");

    return (
        <QRCodeContext.Provider value={{ privateKey, setPrivateKey }}>
            {children}
        </QRCodeContext.Provider>
    );
};