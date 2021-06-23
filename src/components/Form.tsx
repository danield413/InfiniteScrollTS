import React from 'react'
import { useGifs } from '../context/context';
import getGifs from '../helpers/getGifs';
import useForm from '../hooks/useForm';

const Form = (): JSX.Element => {

    const { dispatch } = useGifs();

    const { values, handleChange, reset } = useForm({
        search: ''
    });
    const { search } = values;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if(search.length === 0) return;

        dispatch({
            type: 'LOAD'
        });
        const res = await getGifs(0, search);
        dispatch({
            type: 'ADD',
            payload: {
                data: res.data.data,
                query: search
            }
        });
        reset();
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
                placeholder="Escribe algo aquí..."
            />
            <button type="submit" className="submit">Buscar</button>
        </form>
    )
}

export default Form;