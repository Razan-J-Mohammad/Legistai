// SignupForm.js
"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './SignUp.module.css';
import Image from 'next/image';
import { FaArrowRight, FaUserPlus } from 'react-icons/fa';
import initialFormData from './initialFormData';
import validateForm from './validateForm';
import { handleBlur, handleChange, handleRatingChange } from './formHandlers';

const SignupForm = ({ onSubmit }) => {
    const router = useRouter();
    const [formData, setFormData] = useState(initialFormData);
    const [errors, setErrors] = useState({});
    const [touchedFields, setTouchedFields] = useState({});

    const validate = () => {
        const newErrors = validateForm(formData);
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const showSuccessMessage = () => {
        toast.success('Form submitted successfully!', {
            position: "top-center",
            autoClose: 3000,
        });
    };

    const showErrorMessage = (message) => {
        toast.error(message, {
            position: "top-center",
            autoClose: 3000,
        });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            showSuccessMessage();
            onSubmit();
            router.push('/');
            setFormData(initialFormData);
            setTouchedFields({});
            setErrors({});
        } else {
            showErrorMessage('Please fill in all required fields correctly');
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
                            placeholder="Phone"
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
                            onChange={(e) => handleChange(e, setFormData)}
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
                            placeholder="Location"
                            value={formData.location}
                            onBlur={() => handleBlur('location', setTouchedFields, validate)}
                            onChange={(e) => handleChange(e, setFormData)}
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
                            onChange={(e) => handleChange(e, setFormData)}
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
                                    ★
                                </span>
                            ))}
                        </div>
                        {errors.rating && <div className={styles.errorMessage}>{errors.rating}</div>}
                    </div>


                    <button type="submit" className={styles.signupButton}>
                        Register
                        <FaUserPlus style={{ marginLeft: '10px', fontSize: '16px' }} />
                    </button>
                    <button type="button" onClick={handleFormSubmit} className={styles.signupButton}>
                        Continue
                        <FaArrowRight style={{ marginLeft: '10px', fontSize: '16px' }} />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SignupForm;
