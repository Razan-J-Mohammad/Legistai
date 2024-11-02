"use client";

import React, { useState } from 'react';
import Header from './Header/Header';
import OuterSidebarContainer from '@/app/components/OuterSidebarContainer/OuterSidebarContainer';
import InnerContanier from '@/app/components/InnerContanier/InnerContanier';
import './globals.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import InnerProfileContainer from "@/app/components/InnerProfileContainer/InnerProfileContainer";

const MainContainer = () => {
    const [activeItem, setActiveItem] = useState('Dashboard');

    return (
        <div className="app-layout">
            <Header />
            <div className="container">
                <OuterSidebarContainer activeItem={activeItem} setActiveItem={setActiveItem} />
                <InnerContanier activeItem={activeItem} />
            </div>
        </div>
    );
};

export default MainContainer;
