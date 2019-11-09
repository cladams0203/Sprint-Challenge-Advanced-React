import { useState } from 'react';

export function useForm (initial) {
    const [values, setValues] = useState(initial)

    const handleChange = (e) => {
        e.preventDefault()
        setValues({...values, [e.target.name]: e.target.value})
    }

    return [values, handleChange]
}