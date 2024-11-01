"use client";
import { useState } from 'react';
import Header from './components/Header/Header';
import OuterSidebar from './components/Sidebar/OuterSidebar';
import Contenair from './components/Conteniar/Contenair';
import SignupForm from './components/SignUp/SignupForm';
import './globals.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Layout({ children }) {
    const [showRegistrationForm, setShowRegistrationForm] = useState(true); // عرض نموذج التسجيل أولاً
    const [activeItem, setActiveItem] = useState('Profile');

    const handleFormSubmit = () => {
        setShowRegistrationForm(false); // إخفاء النموذج وإظهار الصفحة الرئيسية بعد التسجيل الناجح
    };

    return (
        <html lang="en">
        <head>
            <link rel="icon" href="/logo_icon_only.ico" />
            <title>Legislate</title>
        </head>
        <body>
        {showRegistrationForm ? (
            <SignupForm onSubmit={handleFormSubmit} /> // عرض نموذج التسجيل
        ) : (
            <div className="app-layout">
                <Header />
                <div className="container">
                    <OuterSidebar activeItem={activeItem} setActiveItem={setActiveItem} />
                    <Contenair activeItem={activeItem} />
                </div>
            </div>
        )}
        </body>
        </html>
    );
}
