
export const handleBlur = (fieldName, setTouchedFields, validate) => {
    setTouchedFields((prevTouched) => ({
        ...prevTouched,
        [fieldName]: true,
    }));
    validate();
};


export const handleRatingChange = (rating, setFormData, validate) => {
    setFormData((prevFormData) => ({
        ...prevFormData,
        rating,
    }));
    validate();
};



