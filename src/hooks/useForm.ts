import { ChangeEvent, useState } from "react"

const useForm = ( initialValue: { search: '' } = { search: ''} ) => {

    const [values, setValues] = useState(initialValue)

    const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        setValues({
            ...values,
            [ target.name ] : target.value
        })
    }

    return { values, handleChange }

}

export default useForm;