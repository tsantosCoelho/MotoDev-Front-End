import './about.css'

import image1 from './images/mission 1.png'
import image2 from './images/offficina.webp'
import image3 from './images/valores 1.png'
import image4 from './images/visão 1.png'




function App() {
    return (
        <div>

            {/* <!-- ///////////////////////////// SEÇÃO 02 /////////////////////////////////////////////////// --> */}


            <div id="section-2">
                <div>
                    <h1>Sobre a Moto Dev: <br /><br /> </h1>
                    <h2>Moto Dev é uma oficina mecânica especializada em motos,
                        fundada em 2007 por Thiago e Walter,
                        que sempre foram apaixonados por motocicletas. Ao longo dos anos,
                        a empresa se consolidou como referência em qualidade e atendimento no mercado,
                        oferecendo serviços de alta qualidade para todos os tipos de motos.</h2>
                </div>
                <img src={image2} />
            </div>


            {/*  <!-- ///////////////////////////// SEÇÃO 03 ///////////////////////////////////////////////////  --> */}

            <div id="section-3">
                <div>
                    <h1>Nossa Missão: <br /><br /> </h1>
                    <h2>Oferecer serviços de mecânica de motos com excelência,
                        utilizando tecnologia de ponta,
                        peças originais e profissionais altamente qualificados,
                        proporcionando aos nossos clientes a melhor experiência possível.</h2>
                </div>
                <img src={image1} />
            </div>



            {/*  <!-- ///////////////////////////// SEÇÃO 04 ///////////////////////////////////////////////////  --> */}

            <div id="section-4">
                <div>
                    <h1>Nossa Visão:<br /><br /></h1>
                    <h2>Ser a oficina mecânica de motos mais admirada e recomendada do Brasil,
                        reconhecida pela qualidade de seus serviços,
                        pela excelência no atendimento e pelo
                        compromisso com a segurança dos motociclistas.</h2>
                </div>
                <img src={image4} />
            </div>



            {/* <!-- ///////////////////////////// SEÇÃO 05 ///////////////////////////////////////////////////  --> */}

            <div id="section-5">
                <div>
                    <h1>Nossos Valores:<br /> </h1>
                    <h2>Qualidade:Buscamos a excelência em tudo que fazemos, desde a escolha das peças até a entrega do serviço
                        final.<br /><br />

                        Honestidade:Somos transparentes em nossas relações com os clientes, sempre oferecendo orçamentos justos
                        e serviços de qualidade. <br /><br />

                        Comprometimento:Estamos comprometidos com a segurança dos motociclistas e com a satisfação de nossos
                        clientes.<br /><br />

                        Respeito:Tratamos todos os clientes com respeito e cordialidade, reconhecendo a importância de cada um
                        para o sucesso da Moto Dev.</h2>
                </div>

                <img src={image3} />

            </div>

        </div>

    );
}

export default App; 