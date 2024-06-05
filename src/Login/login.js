import styles from './login.module.css'
import {Link} from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../utils/api'


function Login(){
    const [user,setUser]= useState({})
    const navegacao = useNavigate()

    function handleChange(e){
        setUser({...user,[e.target.name]:e.target.value})        
    }

    async function login(e){
        e.preventDefault()

        try {
            const data = await api.post("/login",user).then((response)=>{
                return response.data
            }).catch((err)=>{
                console.log("Erro na requisicao",err.response)
            }) 
            const token = JSON.stringify(data.token)
            localStorage.setItem("token",token)
            //alert("deu certo")
            navegacao('/user/services')
            window.location.reload()
            
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <div className={styles.form_container} >
            <h1>Login</h1>
            <form onSubmit={login}>
               <label htmlFor='email'>Email: </label>
               <input type='email' placeholder='Digite seu email' name='email' id='email' onChange={handleChange}/>
               <label htmlFor='senha'>Senha: </label>
               <input type='password' placeholder='Digite sua senha' name='senha' id='senha' onChange={handleChange}/>
               <input type='submit' value='Entrar' />           
            </form>
            <p>Não possui cadastro? <Link to='/register'>Clique aqui</Link></p>
        </div>
    )
}

export default Login