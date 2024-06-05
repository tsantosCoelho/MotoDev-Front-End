import styles from './Footer.module.css'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <section>
            <div className={styles.footer}>

                <div className='menu_footer'>
                <Link to="/">Inicio</Link>
                <Link to="/about">Sobre</Link>
                <Link to="/service">Serviços</Link>
                <Link to="/contact">Contato</Link>
                <Link to="/login">Login</Link>
                </div>

            </div>
        </section>
    )
}

export default Footer