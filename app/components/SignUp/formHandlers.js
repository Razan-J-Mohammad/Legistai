// formHandlers.js

export const handleBlur = (fieldName, setTouchedFields, validate) => {
    setTouchedFields((prevTouched) => ({
        ...prevTouched,
        [fieldName]: true,
    }));
    validate();
};

export const handleChange = (e, setFormData) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
    }));
};

export const handleRatingChange = (rating, setFormData, validate) => {
    setFormData((prevFormData) => ({
        ...prevFormData,
        rating,
    }));
    validate();
};
