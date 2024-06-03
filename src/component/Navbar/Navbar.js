import { Link } from 'react-router-dom'
//import imgPrincipal from './img/devde.png'
import styles from './Navbar.module.css'
import { useState } from 'react'

function Navbar(){
    const [token] = useState(localStorage.getItem('token'))
    return(
        <section>
            <div className={styles.header}>
                <div className={styles.color}>
                    <h1 className={styles.logo}>Moto <span>Dev</span></h1>
                    <nav>
                        {token ? (<a>teste</a>) : (
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