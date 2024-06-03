import './contact.css';
import image1 from './images/contato1.png'
import image2 from './images/redes1.png'



function App() {
    return (
        <div>
            <div className="section2">
                <div>
                    <h1>Contate a Moto Dev!<br /><br /> </h1>
                    <h2>Telefone:(11) 2222-0202 / (11) 90222-0002<br /><br />

                        E-mail:contato@motodev.com.br
                    </h2>
                </div>
                {<img src={image1} />}
            </div>


            {/* <!-- ///////////////////////////// SEÇÃO 03 ///////////////////////////////////////////////////  --> */}

            <div id="section-3">
                <div>
                    <h1>Redes Sociais: <br /><br /> </h1>
                    <h2>Siga a Moto Dev nas redes sociais para ficar por dentro das novidades e promoções!<br /><br />


                        Facebook: motodevOficial<br /><br />

                        Instagram: @motodevOficial<br /><br />

                        Twitter: @motodevOficial</h2>
                </div>
                {<img src={image2} />}
            </div>


            {/* <!-- ///////////////////////////// SEÇÃO 04 ///////////////////////////////////////////////////  --> */}

            <div id="section-4">
                <div>
                    <h1>Endereço:<br /><br /> </h1>
                    <h2>Rua Um, 21<br /><br />
                        Bairro dos Desenvolvedores<br /><br />
                        São Paulo, SP 01000-000</h2>
                </div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14616.040069916733!2d-46.69650325!3d-23.67559975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5036539648d5%3A0x78501a72680ea23a!2sCentro%20Universit%C3%A1rio%20Senac%20-%20Santo%20Amaro!5e0!3m2!1spt-BR!2sbr!4v1714398730563!5m2!1spt-BR!2sbr"
                    width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>

        </div>
    );
}

export default App;
















