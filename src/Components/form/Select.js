import styles from './Select.module.css'
import {useState, useEffect} from "react"

function Select({text, name, options, value, handleOnChange}){

    const [categories, setCategories] = useState([])


    useEffect((e)=>{
            fetch("http://localhost:5000/categories",{
              method: "GET",
              headers:{
                'Content-Type': "application/json"
              }
            }).then((res) => res.json())
            .then((data)=>
            {setCategories(data)
            })
            .catch((err)=>console.log(err))
                   
    },[])

    return (
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}</label>
            <select name={name} id={name} onClick={useEffect} onChange={handleOnChange}>
                <option>Selecione uma opção</option>
                {categories.map((option) => (
                    <option value={option.id} key={option.id}>
                        {option.name}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default Select