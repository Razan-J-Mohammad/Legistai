import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './SignUp.module.css';
import Image from 'next/image';
import { FaArrowRight, FaUserPlus, FaStar, FaExclamationTriangle } from 'react-icons/fa';
import initialFormData from './initialFormData';
import validateForm from './validateForm';
import { handleBlur, handleChange, handleRatingChange } from './formHandlers';
import axios from 'axios';

const SignupForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState(initialFormData);
    const [errors, setErrors] = useState({});
    const [touchedFields, setTouchedFields] = useState({});
    const [userId, setUserId] = useState(null);

    const validate = () => {
        const newErrors = validateForm(formData);
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const showSuccessMessage = () => {
        toast.success('Form submitted successfully! Click "Continue" to view your account.', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            icon: <FaExclamationTriangle />,
            style: {
                backgroundColor: "#1bbcbc",
                color: "#fff",
                fontSize: "16px",
                fontWeight: "bold",
                padding: "10px 15px",
                borderRadius: "8px",
            },
        });
    };

    const showErrorMessage = (message) => {
        toast.error(message, {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            icon: <FaExclamationTriangle />,
            style: {
                backgroundColor: "#1bbcbc",
                color: "#fff",
                fontSize: "16px",
                fontWeight: "bold",
                padding: "10px 15px",
                borderRadius: "8px",
            },
        });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const newTouchedFields = {
            name: true,
            phone: true,
            email: true,
            location: true,
            description: true,
            rating: true,
        };
        setTouchedFields(newTouchedFields);

        if (validate()) {
            try {
                const response = await axios.post('http://127.0.0.1:5000/api/register', formData);
                const userId = response.data.user_id;
                setUserId(userId);
                localStorage.setItem('user', JSON.stringify(response.data));
                showSuccessMessage();
            } catch (error) {
                const errorMessage = error.response?.data?.error || 'An error occurred';
                showErrorMessage(errorMessage);
            }
        } else {
            showErrorMessage('Please fill in all required fields correctly.');
        }
    };

    const handleContinue = () => {
        if (!userId) {
            showErrorMessage('Please click the "Register" button first to create an account.');
        } else {
            onSubmit(userId);
        }
    };

    return (
        <div className={styles.signupContainer}>
            <div className={styles.signupForm}>
                <ToastContainer />
                <h2 className={styles.title}>
                    <Image src='/logo.png' alt="Logo" width={160} height={60} className={styles.logo} />
                </h2>
                <p className={styles.p}>Welcome To <span className={styles.logs}>Legistai</span></p>
                <hr className={styles.dividerLine} />
                <form onSubmit={handleFormSubmit} className={styles.formContainer}>

                    <div className={styles.inputGroup}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={formData.name}
                            onBlur={() => handleBlur('name', setTouchedFields, validate)}
                            onChange={(e) => handleChange(e, setFormData)}
                            className={errors.name && touchedFields.name ? styles.error : ''}
                        />
                        {errors.name && touchedFields.name && (
                            <div className={styles.errorMessage}>{errors.name}</div>
                        )}
                    </div>

                    <div className={styles.inputGroup}>
                        <input
                            type="text"
                            name="phone"
                            placeholder="Phone (e.g., +97X XX XXX XXXX)"
                            value={formData.phone}
                            onBlur={() => handleBlur('phone', setTouchedFields, validate)}
                            onChange={(e) => handleChange(e, setFormData)}
                            className={errors.phone && touchedFields.phone ? styles.error : ''}
                        />
                        {errors.phone && touchedFields.phone && (
                            <div className={styles.errorMessage}>{errors.phone}</div>
                        )}
                    </div>

                    <div className={styles.inputGroup}>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onBlur={() => handleBlur('email', setTouchedFields, validate)}
                            onChange={(e) => handleChange(e, setFormData)}  // Add onChange here
                            className={errors.email && touchedFields.email ? styles.error : ''}
                        />
                        {errors.email && touchedFields.email && (
                            <div className={styles.errorMessage}>{errors.email}</div>
                        )}
                    </div>

                    <div className={styles.inputGroup}>
                        <input
                            type="text"
                            name="location"
                            placeholder="Location (e.g., City - Town - Street)"
                            value={formData.location}
                            onBlur={() => handleBlur('location', setTouchedFields, validate)}
                            onChange={(e) => handleChange(e, setFormData)}  // Add onChange here
                            className={errors.location && touchedFields.location ? styles.error : ''}
                        />
                        {errors.location && touchedFields.location && (
                            <div className={styles.errorMessage}>{errors.location}</div>
                        )}
                    </div>

                    <div className={styles.inputGroup}>
                        <textarea
                            name="description"
                            placeholder="Description"
                            value={formData.description}
                            onBlur={() => handleBlur('description', setTouchedFields, validate)}
                            onChange={(e) => handleChange(e, setFormData)}  // Add onChange here
                            className={`${styles.customTextarea} ${errors.description && touchedFields.description ? styles.error : ''}`}
                            rows={4}
                        />
                        {errors.description && touchedFields.description && (
                            <div className={styles.errorMessage}>{errors.description}</div>
                        )}
                    </div>

                    <div className={styles.ratingGroup}>
                        <label>Rating </label>
                        <div className={styles.starRating}>
                            {[1, 2, 3, 4, 5].map((star) => (
                                <span
                                    key={star}
                                    onClick={() => handleRatingChange(star, setFormData, validate)}
                                    className={formData.rating >= star ? styles.filledStar : styles.emptyStar}
                                >
                                    <FaStar/>
                                </span>
                            ))}
                        </div>
                        {errors.rating && touchedFields.rating &&
                            <div className={styles.errorMessage}>{errors.rating}</div>}
                    </div>

                    <button type="submit" className={styles.signupButton}>
                        Register
                        <FaUserPlus style={{marginLeft: '10px', fontSize: '16px'}}/>
                    </button>

                    <button
                        type="button"
                        onClick={handleContinue}
                        className={styles.signupButton}
                    >
                        Continue
                        <FaArrowRight style={{marginLeft: '10px', fontSize: '16px'}}/>
                    </button>

                </form>
            </div>
        </div>
    );
};

export default SignupForm;
