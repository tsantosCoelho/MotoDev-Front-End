import styles from './ClienteService.module.css'
import { useState,useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import api from '../utils/api'
import edit from './img/edit.png'
import delet from './img/delet.png'
import { useNavigate } from 'react-router-dom'


function Clientes(){
    const {id} = useParams()
    const [cliente,setCliente] = useState({})
    const [msg,setMsg] = useState('')
    const [servicos,setServico] = useState([])
    const reload = useNavigate()

    useEffect(()=>{
        api.get(`/cliente/${id}`).then((resp)=>{
            setCliente(resp.data)
        })

        api.get(`/orcamento/listar/${id}`).then((resp)=>{
            setServico(resp.data)
        })
        
    },[id])

    async function deletarServico(idServico){
        try {
            await api.delete(`/orcamento/${idServico}`).then((resp)=>{
                alert(resp.data)
                window.location.reload()
            }).catch((resp)=>{
                alert(resp.data)
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <section className={styles.container}>
            <div>
                <h1>Servicos do {cliente.nome}</h1>
            </div>
            <div className={styles.border}>
                {servicos.map((servico)=>(
                    <section className={styles.servico}>
                        <p>Serviço: {servico.servico}</p>
                        <p>Preço: {servico.valorFinal}</p>                       
                        <div className={styles.botoes}>
                            <button onClick={()=>{
                                deletarServico(servico.id)
                            }}><img src={delet} alt='botao de deletar' /></button>                                
                        </div>
                    </section>
                ))}
            </div>
        </section>
    )
}

export default Clientes