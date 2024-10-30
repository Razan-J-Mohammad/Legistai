"use client";
import { useState } from 'react';
import Header from './components/Header/Header';
import OuterSidebar from './components/Sidebar/OuterSidebar';
import Contenair from './components/Conteniar/Contenair';
import './globals.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Layout({ children }) {
    const [activeItem, setActiveItem] = useState('Profile'); // Manage active item

    return (
        <html lang="en">
        <head>
            <link rel="icon" href="/favicon.ico" />
            <title>Legislate</title>
        </head>
        <body>
        <div className="app-layout">
            <Header />
            <div className="container">
                <OuterSidebar activeItem={activeItem} setActiveItem={setActiveItem} />
                <Contenair activeItem={activeItem} /> {/* Conditionally render content */}
            </div>
        </div>
        </body>
        </html>
    );
}
