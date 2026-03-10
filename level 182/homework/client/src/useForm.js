const useForm = () => {
    const handleSubmit = (e, setIsError, func) => {
        e.preventDefault();

        const formData = {};

        for(const [key, value] of new FormData(e.target).entries()) {
            formData[key] = value;
        }

        func(setIsError, formData);
    }

    return handleSubmit;
}

export { useForm };