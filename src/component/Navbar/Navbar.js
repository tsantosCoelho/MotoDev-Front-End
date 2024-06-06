import { Link, useNavigate } from 'react-router-dom'
//import imgPrincipal from './img/devde.png'
import styles from './Navbar.module.css'
import { useState } from 'react'

function Navbar(){
    const [token] = useState(localStorage.getItem('token'))
    const history = useNavigate()

    function logof(){
        localStorage.setItem('token','')
        history('/')
        window.location.reload()
        

    }

    return(
        <section>
            <div className={styles.header}>
                <div className={styles.color}>
                    <h1 className={styles.logo}>Moto <span>Dev</span></h1>
                    <nav>
                        {token ? (
                            <div>
                                <Link to="/user/register/service">Registrar Serviços</Link>
                                <Link to="/user/register/client">Registrar Cliente</Link>
                                <Link to="/user/services">Serviço</Link>
                                <Link to="/" onClick={logof}>Sair</Link>
                            </div>
                        ) : (
                            <div>
                                <Link to="/">Inicio</Link>
                                <Link to="/about">Sobre</Link>
                                <Link to="/service">Serviços</Link>
                                <Link to="/contact">Contato</Link>
                                <Link to="/login">Login</Link>
                                
                            </div>
                        )}
                    </nav> 
                 </div>
            </div>
        </section>
    )
}

export default Navbar