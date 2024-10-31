"use client";
import { useState } from 'react';
import styles from './SidebarButton.module.css';
import BasicInfo from "@/app/components/InnerSideBar/Content/BasicInfo";
import LawyerTeam from "@/app/components/InnerSideBar/Content/LawyerTeam";
import Reviews from "@/app/components/InnerSideBar/Content/Reviews";
import CaseInfo from "@/app/components/InnerSideBar/Content/CaseInfo";
import FinancialInfo from "@/app/components/InnerSideBar/Content/FinancialInfo";
import Communication from "@/app/components/InnerSideBar/Content/Communication";
import Documents from "@/app/components/InnerSideBar/Content/Documents";
import Specialization from "@/app/components/InnerSideBar/Content/Specialization";
import Information from "@/app/components/Information/information";

export default function SidebarButton() {
    const [activeIndex, setActiveIndex] = useState(0);

    const sections = [
        { name: 'Basic Information', component: <BasicInfo /> },
        { name: 'Specialization', component: <Specialization /> },
        { name: 'Lawyer Team', component: <LawyerTeam /> },
        { name: 'Reviews', component: <Reviews /> },
        { name: 'Case Information', component: <CaseInfo /> },
        { name: 'Financial Information', component: <FinancialInfo /> },
        { name: 'Communication', component: <Communication /> },
        { name: 'Documents', component: <Documents /> }
    ];

    return (
        <div className={styles.sidebar}>
            <ul>
                {sections.map((section, index) => (
                    <li key={section.name}>
                        <button
                            className={`${styles.sidebarButton} ${activeIndex === index ? styles.active : ''}`}
                            onClick={() => setActiveIndex(index)}
                        >
                            {section.name}
                        </button>
                    </li>
                ))}
            </ul>
            <div className={styles.contentContainer}>
                {sections[activeIndex].component}
            </div>
            {activeIndex === 0 && <Information />}
        </div>
    );
}
