import './home.css';
import image1 from './images/FOTOACESSORIOS.jpg'
import image2 from './images/mecnico.jpeg'
import image3 from './images/notecara.png'
import image4 from './images/joia.png'
import image6 from './images/apertomao.png'


function App() {
  return (
    <div>
    {/* ///////////////////////////// SEÇÃO 02 /////////////////////////////////////////////////// */}
      <div id="section-2">
        <div>
          <h1>Conheça o seu <br /> novo lugar</h1>
          <h2>Um viajante de moto sabe que a jornada é o
            que importa. Mas, assim como a desaceleração que uma curva
            causa,
            parar para respirar e se cuidar faz parte do caminho.<br />
            Para isso, nasceu a Moto Dev. <br /><br />Sejam bem-vindos.</h2>
        </div>
        <img src={image1} />
      </div>
      {/* ///////////////////////////// SEÇÃO 03 /////////////////////////////////////////////////// */}

      <div id="section-3">
        <div>
          <h1>Aqui você encontra:</h1>
          <h2>Mecânicos altamente qualificados e experientes:<br /><br />
            Nossa equipe é composta por profissionais que se dedicam
            a oferecer o melhor serviço possível aos nossos clientes.<br /><br />
            Serviços de alta qualidade:<br />
            Utilizamos apenas peças originais de alta qualidade e
            oferecemos garantia de satisfação em todos os nossos
            serviços.</h2>
        </div>
        <img src={image2} />
      </div>



      {/* ///////////////////////////// SEÇÃO 04 /////////////////////////////////////////////////// */}

      <div id="section-4">
        <div>
          <h1>Atendimento personalizado:
            Entendemos que cada moto é única e cada cliente também.
            Por isso, oferecemos atendimento personalizado para atender
            às suas necessidades específicas.</h1>
        </div>
        <img src={image3} />
      </div>
     


      {/* ///////////////////////////// SEÇÃO 05 /////////////////////////////////////////////////// */}
      
      <div id="section-5">

        <img src={image4} />

        <h1>Preços competitivos:
          Acreditamos que a qualidade não precisa ser cara,
          por isso oferecemos preços competitivos
          para todos os nossos serviços.
        </h1>
      </div>
           



      {/* ///////////////////////////// SEÇÃO 06 /////////////////////////////////////////////////// */}
      

      <div id="section-6">

        <div className='horarios'>

          <h1>HORÁRIOS</h1>
          <p>Fique de olho no nosso
            horário de funcionamento.</p>

        </div>


        <div className='dia'>
          <p>segunda-feira<br />
            fechado</p>
          <hr></hr>
          <p>terça-feira<br />
            10h às 17h</p>
          <hr></hr>
          <p>quarta-feira <br />
            10h às 17h</p>
          <hr></hr>
          <p>quinta-feira<br />
            10h às 17h</p>
          <hr></hr>
          <p>sexta-feira<br />
            10h às 17h</p>
          <hr></hr>
          <p>sábado<br />
            10h às 17h</p>
          <hr></hr>
          <p>domingo<br />
            10h às 17h</p>

        </div>

      </div>     

      {/* ///////////////////////////// SEÇÃO 07 /////////////////////////////////////////////////// */}
      

      <div id="section-7">
        <img src={image6} />

        <h1>Se você está procurando uma oficina mecânica de motos que seja confiável,
          profissional e que ofereça serviços de alta qualidade,
          então a Moto Dev é o lugar certo para você!
        </h1>
      </div>

    </div>
  );
}

export default App;
