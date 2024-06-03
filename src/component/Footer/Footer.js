import styles from './Footer.module.css'

function Footer() {
    return (
        <section>
            <div className={styles.footer}>

                <div className='menu_footer'>
                    <a href="#">Sobre</a>
                    <a href="#">Serviços</a>
                    <a href="#">Contado</a>
                    <a href="#">Login</a>
                </div>

            </div>
        </section>
    )
}

export default Footer