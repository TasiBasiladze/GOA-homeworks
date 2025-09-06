function useFormData(){
    function handleSubmit(e, func){
        e.preventDefault()
        const formData = {};

        for(const [key, value] of new FormData(e.target).entries()){
            formData[key] = value;
        }

        func(formData);
    }
    return handleSubmit
}

export { useFormData }