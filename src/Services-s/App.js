import './index.css';
import image1 from './images/serviços 1.png'
import image2 from './images/euipe 1.png'
import image3 from './images/satisfação 1.png'



function App() {
  return (
    <div>
      <div id="container">
        <div id="header">
            <h1 id="logo">Moto <span>Dev</span></h1>
            <div id="nav">
                <a href="#">Inicio</a>
                <a href="#">Sobre</a>
                <a href="#">Serviços</a>
                <a href="#">Contado</a>
            </div>
        </div>
    </div>



    {/* <!-- ///////////////////////////// SEÇÃO 02 /////////////////////////////////////////////////// --> */}


    <div id="section-2">
        <div>
            <h1>Nossos Serviços: <br/><br/> </h1>
            <h2>A Moto Dev oferece uma ampla gama de serviços de mecânica de motos, incluindo:<br/><br/>

                Manutenção preventiva:Revisão geral da moto, troca de óleo, filtro de óleo, filtro de ar, velas,
                etc.<br/><br/>

                Reparos:Conserto de motores, transmissões, freios, suspensão, pneus, etc.<br/><br/>

                Acessórios:Instalação de acessórios como alarmes, baús, GPS, etc.<br/><br/>

                Outros serviços:Lavagem de moto, polimento, etc.</h2>
        </div>
        <img src={image1}/>
    </div>


    {/* <!-- ///////////////////////////// SEÇÃO 03 ///////////////////////////////////////////////////  --> */}

    <div id="section-3">
        <div>
            <h1>Nossa Equipe: <br/><br/> </h1>
            <h2>A equipe da Moto Dev é composta por profissionais altamente qualificados e experientes,
                que se dedicam a oferecer o melhor serviço possível aos nossos clientes.
                Todos os nossos mecânicos são treinados regularmente
                nas últimas tecnologias e técnicas de reparo de motos,
                e utilizamos apenas peças originais de alta qualidade.</h2>
        </div>
        <img src={image2}/>
    </div>

    {/* <!-- ///////////////////////////// SEÇÃO 04 ///////////////////////////////////////////////////  --> */}


    <div id="section-4">
        <div>
            <h1>Nosso Compromisso:<br/><br/> </h1>
            <h2>A Moto Dev está comprometida com a segurança dos motociclistas e com a satisfação de nossos clientes.
                Por isso, oferecemos serviços de alta qualidade, com garantia de satisfação.<br/><br/>


                Venha conhecer a Moto Dev e faça parte da nossa família!
                Aqui, sua moto está em boas mãos.</h2>
        </div>
        <img src={image3}/>
    </div>

    {/* <!-- ///////////////////////////// SEÇÃO FOOTER ///////////////////////////////////////////////////  --> */}

    <div id="footer">

        <div>
            <a href="#">Sobre</a>
            <a href="#">Serviços</a>
            <a href="#">Contado</a>
            <a href="#">Login</a>
        </div>

    </div>

    </div>
  );
}

export default App;
