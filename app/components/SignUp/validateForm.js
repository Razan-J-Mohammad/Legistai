// validateForm.js
const validateForm = (formData) => {
    const errors = {};
    if (!formData.name) {
        errors.name = 'Name is required';
    } else if (!/^[a-zA-Z]+$/.test(formData.name)) {
        errors.name = 'Name must contain only letters';
    }

    if (!formData.phone) {
        errors.phone = 'Phone is required';
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
        errors.phone = 'Phone must be 10 digits';
    }

    if (!formData.email) {
        errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        errors.email = 'Email is invalid';
    }

    if (!formData.description) errors.description = 'Description is required';
    if (!formData.location) errors.location = 'Location is required';

    return errors;
};

export default validateForm;
