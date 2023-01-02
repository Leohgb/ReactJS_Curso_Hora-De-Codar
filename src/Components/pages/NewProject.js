import { useNavigate } from 'react-router-dom'
import ProjectForm from '../project/ProjectForm'
import styles from './NewProject.module.css'

function NewProject(){


    const history = useNavigate()

    const createPost = (project) => {

        project.cost = 0
        project.services = []

        const postProject = async () => {
            try {
                await fetch("http://localhost:5000/projects",
                    {
                        method : "POST",
                        headers : {
                            "Content-type" : "application/json"
                        },
                        body : JSON.stringify(project),
                    }
                ).then((res) => res.json())
                .then((data) =>{
                    console.log(data)
                    history('/projects', { state: { message: 'Projeto criado com sucesso!' } })
                }).catch((err) => console.log(err))
            } catch (error) {
                console.log(error)
            }
        }
        
        postProject()

    }

    return (
    <div className={styles.newproject_container}>
        <h1>Criar Projeto</h1>
        <p>Crie seu projeto para depois adicionar os serviços</p>
        <ProjectForm btnText="Criar Projeto" handleSubmit={createPost}/>
        
    </div>
    
    )
}

export default NewProject