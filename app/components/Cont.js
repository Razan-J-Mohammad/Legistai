import { useState } from 'react';
import SignupForm from '../components/SignUp/SignupForm';

const Cont = ({ activeItem }) => {
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleFormSubmit = () => {
        setFormSubmitted(true);
    };

    return (
        <div className="contenair">
            {!formSubmitted ? (
                <SignupForm onSubmit={handleFormSubmit} />
            ) : (
                <div>
                </div>
            )}
        </div>
    );
};

export default Cont;
