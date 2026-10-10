import { useState } from 'react'

function Form({inputs, textbtn, onSubmit}){
    
    const[form, setForm] = useState({ })


    const handleChange = (e) => {
        setForm({
            ...form, [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit(form)
    }

    return(

        <form onSubmit={handleSubmit}>
            {inputs.map((input, index) => (
                <input 
                    key={index}
                    name={input.name}
                    type={input.type}
                    placeholder={input.place}
                    onChange={handleChange}
                />
            ))}
            <button>{textbtn}</button>
        </form>

    )
}

export default Form