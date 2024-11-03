"use client";
import { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import OuterSidebarContainer from '@/app/components/OuterSidebarContainer/OuterSidebarContainer';
import InnerContanier from '@/app/components/InnerContanier/InnerContanier';
import SignupForm from './components/SignUp/SignupForm';
import './globals.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import axios from 'axios';

export default function Layout() {
    const [showRegistrationForm, setShowRegistrationForm] = useState(true);
    const [userData, setUserData] = useState(null);
    const [activeItem, setActiveItem] = useState('Profile');

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUserData(JSON.parse(storedUser));
            setShowRegistrationForm(false);
        }
    }, []);

    const handleFormSubmit = async (id) => {
        setShowRegistrationForm(false);
        await fetchUserProfile(id);
    };

    const fetchUserProfile = async (id) => {
        try {
            const response = await axios.get(`http://127.0.0.1:5000/api/getProfileById/${id}`);
            setUserData(response.data);
            localStorage.setItem('user', JSON.stringify(response.data));
        } catch (error) {
            console.error('Failed to fetch user profile:', error);
        }
    };

    const logout = () => {
        localStorage.removeItem('user');
        setUserData(null);
        setShowRegistrationForm(true);
    };

    return (
        <html lang="en">
        <head>
            <link rel="icon" href="/logo_icon_only.ico" />
            <title>Legislate</title>
        </head>
        <body>
        {showRegistrationForm ? (
            <SignupForm onSubmit={handleFormSubmit} />
        ) : (
            <div className="app-layout">
                <Header />
                <div className="container">
                    <OuterSidebarContainer
                        activeItem={activeItem}
                        setActiveItem={setActiveItem}
                        onLogout={logout}
                    />
                    <InnerContanier activeItem={activeItem} userData={userData} />
                </div>
            </div>
        )}
        </body>
        </html>
    );
}
