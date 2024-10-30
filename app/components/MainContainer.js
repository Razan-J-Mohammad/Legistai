"use client";

import React, { useState } from 'react';
import Header from './Header/Header';
import OuterSidebar from './Sidebar/OuterSidebar';
import Contenair from './Conteniar/Contenair';
import './globals.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const MainContainer = () => {
    const [activeItem, setActiveItem] = useState('Dashboard'); // Initialize with "Dashboard"

    return (
        <div className="app-layout">
            <Header />
            <div className="container">
                {/* Pass the activeItem and setActiveItem as props */}
                <OuterSidebar activeItem={activeItem} setActiveItem={setActiveItem} />
                <Contenair activeItem={activeItem} /> {/* Display content based on activeItem */}
            </div>
        </div>
    );
};

export default MainContainer;
