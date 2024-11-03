const validateForm = (formData) => {
    const errors = {};

    if (!formData.name) {
        errors.name = 'Please enter your name.';
    } else if (!/^[\s\S]+$/.test(formData.name)) {
        errors.name = 'Name cannot be empty.';
    }

    if (!formData.phone) {
        errors.phone = 'Please provide your phone number.';
    } else if (!/^(\+?\d[\d\s]*)$/.test(formData.phone)) {
        errors.phone = 'Phone number can start with a "+" but it’s not required. Only numbers and spaces are allowed.';
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
    } else if (!/^[a-zA-Z0-9\s.,-]+$/.test(formData.location)) {
        errors.location = 'Location can contain letters, numbers, spaces, and the characters ".", ",", and "-". Other special characters ';
    }

    if (!formData.rating || formData.rating < 1) {
        errors.rating = "Please select a rating.";
    }

    return errors;
};

export default validateForm;
