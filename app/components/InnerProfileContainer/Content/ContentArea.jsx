import BasicInfo from './BasicInfo';
import Specialization from './Specialization';
import LawyerTeam from './LawyerTeam';
import Reviews from './Reviews';
import CaseInfo from './CaseInfo';
import FinancialInfo from './FinancialInfo';
import Communication from './Communication';
import Documents from './Documents';

export default function ContentArea({ selectedSection }) {
    switch (selectedSection) {
        case 'Basic BasicInformation':
            return <BasicInfo />;
        case 'Specialization':
            return <Specialization />;
        case 'Lawyer Team':
            return <LawyerTeam />;
        case 'Reviews':
            return <Reviews />;
        case 'Case BasicInformation':
            return <CaseInfo />;
        case 'Financial BasicInformation':
            return <FinancialInfo />;
        case 'Communication':
            return <Communication />;
        case 'Documents':
            return <Documents />;
        default:
            return <BasicInfo />;
    }
}
