"use client";
import { useState } from 'react';
import styles from './InnerSidebarButtons.module.css';
import BasicInfo from "@/app/components/InnerProfileContainer/Content/BasicInfo";
import LawyerTeam from "@/app/components/InnerProfileContainer/Content/LawyerTeam";
import Reviews from "@/app/components/InnerProfileContainer/Content/Reviews";
import CaseInfo from "@/app/components/InnerProfileContainer/Content/CaseInfo";
import FinancialInfo from "@/app/components/InnerProfileContainer/Content/FinancialInfo";
import Communication from "@/app/components/InnerProfileContainer/Content/Communication";
import Documents from "@/app/components/InnerProfileContainer/Content/Documents";
import Specialization from "@/app/components/InnerProfileContainer/Content/Specialization";
import BasicInformation from "@/app/components/BasicInformation/BasicInformation";

export default function InnerSidebarButtons({ sections, activeIndex, setActiveIndex }) {

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

        </div>
    );
}
