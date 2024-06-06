import styles from './Service.module.css'
import api from '../utils/api'
import { useState, useEffect } from 'react'
import edit from './img/edit.png'
import delet from './img/delet.png'
import { Link } from 'react-router-dom'

function Service(){
    const [clientes,setClientes] = useState([])
    useEffect(()=>{
        api.get("/cliente/listar").then((response)=>{
            setClientes(response.data)
        })

    },[])

    async function deletarCliente(id){
        try {
            await api.delete(`/cliente/${id}`).then((resp)=>{
                alert("cliente excluido com sucesso")
                window.location.reload()
            })
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <section className={styles.container}>
            <div>
                <div className={styles.titulo}>
                    <p>Clientes</p>
                    <Link to="/user/register/client" >Adicionar Cliente</Link>
                </div>
                <div className={styles.borda}>
                    {clientes.length > 0 && clientes.map((cliente)=>{
                        return(
                            <div className={styles.cliente}>
                                <p>{cliente.nome}</p>
                                <p>{cliente.cpf}</p>
                                <div className={styles.botoes}>
                                    <Link to={`/edit/client/${cliente.id}`} ><img src={edit} className={styles.edit} alt='botao de editar' /></Link>
                                    <button onClick={()=>{
                                        deletarCliente(cliente.id)
                                    }} ><img src={delet} alt='botao de deletar' /></button>
                                    <Link to={`/service/edit/${cliente.id}` } className={styles.link}>Serviços</Link>
                                </div>
                            </div>
                        )
                    })}
                    {clientes.length === 0 && <p>Não há clinetes cadastrados</p>}
                </div>
            </div>
        </section>
    )
}

export default Service