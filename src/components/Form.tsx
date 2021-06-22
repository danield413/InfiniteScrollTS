import React from 'react'
import { useGifs } from '../context/context';
import getGifs from '../helpers/getGifs';
import useForm from '../hooks/useForm';

const Form = (): JSX.Element => {

    const { dispatch } = useGifs();

    const { values, handleChange } = useForm({
        search: ''
    });
    const { search } = values;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        dispatch({
            type: 'LOAD'
        })
        const res = await getGifs(0, search)
        dispatch({
            type: 'ADD',
            payload: res && res.data.data
        })
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <input 
                type="text" 
                className="input"
                name="search" 
                onChange={handleChange} 
                value={values.search}
                autoComplete="off"
            />
            <button type="submit" className="submit">Buscar</button>
        </form>
    )
}

export default Form;