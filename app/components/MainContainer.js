"use client";

import React, { useState } from 'react';
import Header from './Header/Header';
import OuterSidebar from './Sidebar/OuterSidebar';
import Contenair from './Conteniar/Contenair';
import './globals.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import InnerSideBar from "./InnerSideBar/InnerSideBar";

const MainContainer = () => {
    const [activeItem, setActiveItem] = useState('Dashboard');

    return (
        <div className="app-layout">
            <Header />
            <div className="container">
                <OuterSidebar activeItem={activeItem} setActiveItem={setActiveItem} />
                <Contenair activeItem={activeItem} />
               <InnerSideBar/>
            </div>
        </div>
    );
};

export default MainContainer;
