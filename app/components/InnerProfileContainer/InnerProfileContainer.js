import InnerSidebarButtons from './InnerSidebarButtons';
import styles from './InnerProfileContainer.module.css';
import BasicInformation from "@/app/components/BasicInformation/BasicInformation";
import { useState } from 'react';
import BasicInfo from "@/app/components/InnerProfileContainer/Content/BasicInfo";
import Specialization from "@/app/components/InnerProfileContainer/Content/Specialization";
import LawyerTeam from "@/app/components/InnerProfileContainer/Content/LawyerTeam";
import Reviews from "@/app/components/InnerProfileContainer/Content/Reviews";
import CaseInfo from "@/app/components/InnerProfileContainer/Content/CaseInfo";
import FinancialInfo from "@/app/components/InnerProfileContainer/Content/FinancialInfo";
import Communication from "@/app/components/InnerProfileContainer/Content/Communication";
import Documents from "@/app/components/InnerProfileContainer/Content/Documents";

export default function InnerProfileContainer({ userData }) {
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
            <InnerSidebarButtons sections={sections} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
            <div className={styles.InnerSidebarContentContainer}>
                {sections[activeIndex].component}
                {activeIndex === 0 && <BasicInformation userData={userData} />}
            </div>
        </div>
    );
}
