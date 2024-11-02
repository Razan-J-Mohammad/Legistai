"use client";
import { useState } from 'react';
import Header from './components/Header/Header';
import OuterSidebarContainer from '@/app/components/OuterSidebarContainer/OuterSidebarContainer';
import InnerContanier from '@/app/components/InnerContanier/InnerContanier';
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
                    <OuterSidebarContainer activeItem={activeItem} setActiveItem={setActiveItem} />
                    <InnerContanier activeItem={activeItem} />
                </div>
            </div>
        )}
        </body>
        </html>
    );
}
