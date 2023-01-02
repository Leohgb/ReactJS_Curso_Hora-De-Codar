import { useState, useEffect} from "react"

import styles from './ProjectForm.module.css'
import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'

function ProjectForm({handleSubmit, btnText, projectData}){

  const [project, setProject] = useState(projectData || {})

  const submit = (e) =>{
    e.preventDefault()
    handleSubmit(project)
    //console.log(project)
  }

  function handleChange(e){
    setProject({...project, [e.target.name]: e.target.value})
    console.log(project)
  }

  function handleCategory(e){
    setProject({...project, category:{
      id: e.target.value,
      name: e.target.options[e.target.selectedIndex].text,
    },})
  }
    return (
        <form onSubmit={submit} className={styles.form}>
          <Input type="text" text="Nome do projeto" name="name" placeholder="Insira o nome do Projeto" handleOnChange={handleChange} value={project.name ? project.name : ''}/>
          <Input type="number" text="Orçamento do projeto" name="budget" placeholder="Insira o orçamento total" handleOnChange={handleChange} value={project.budget ? project.budget : ''}/>
          <Select name="category_id" text="Selecione uma categoria" handleOnChange={handleCategory} />
          <SubmitButton text={btnText} />
        </form>    
    )
}

export default ProjectForm