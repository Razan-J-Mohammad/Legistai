// validateForm.js
const validateForm = (formData) => {
    const errors = {};
    if (!formData.name) {
        errors.name = 'Please enter your name.';
    } else if (!/^[a-zA-Z\s]+$/.test(formData.name)) {
        errors.name = 'Name can only contain letters and spaces. Special characters or numbers are not allowed.';
    }
    if (!formData.phone) {
        errors.phone = 'Please provide your phone number.';
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
        errors.phone = 'Phone number must be exactly 10 digits, with no spaces or special characters.';
    }

    if (!formData.email) {
        errors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        errors.email = 'Please enter a valid email address, such as "example@gmail.com".';
    }
    if (!formData.description) {
        errors.description = 'Please provide a brief description.';
    }

    if (!formData.location) {
        errors.location = 'Please specify your location.';
    }
    if (!formData.rating || formData.rating < 1) {
        errors.rating = "Please select a rating.";
    }

    return errors;
};

export default validateForm;
