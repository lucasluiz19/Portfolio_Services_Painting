import { Card, CarrosselImage, Contacts, Container, Content, ContentCards, Header, HeaderContentCard } from "./styles";
import logo from './assets/logo.jpeg'
import { Check, CheckCircle, Home, Images, PaintRoller, PhoneCall, Star } from "lucide-react";
import { CaretLeft, CaretRight, InstagramLogo, WhatsappLogo } from "phosphor-react";

import { useRef} from "react";



import foto1 from './assets/foto1.jpg'
import foto2 from './assets/foto2.jpg'
import foto3 from './assets/foto3.jpg'
import foto4 from './assets/foto4.jpg'
import foto5 from './assets/foto5.jpg'
import foto6 from './assets/foto6.jpg'
import foto7 from './assets/foto7.jpg'
import foto8 from './assets/foto8.jpg'
import foto9 from './assets/foto9.jpeg'
import foto10 from './assets/foto10.jpeg'
import foto11 from './assets/foto11.jpeg'
import foto12 from './assets/foto12.jpeg'





const phoneNumber = "5518998170208"; // número desejado
const message = "Olá, gostaria de fazer um orçamento."; // Mensagem pré-definida
const encodedMessage = encodeURIComponent(message); // Codifica a mensagem para a URL
const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;



const data = [
  {
    id: 1,
    photoAdress: foto1
  },
  {
    id: 2,
    photoAdress: foto2
  },
  {
    id: 3,
    photoAdress: foto3
  },
  {
    id: 4,
    photoAdress: foto4
  },
  {
    id: 5,
    photoAdress: foto5
  },
  {
    id: 6,
    photoAdress: foto6
  },
  {
    id: 7,
    photoAdress: foto7
  },
  {
    id: 8,
    photoAdress: foto8
  },

  {
    id: 9,
    photoAdress: foto9
  },
  {
    id: 10,
    photoAdress: foto10
  },
  {
    id: 11,
    photoAdress: foto11
  },
  {
    id: 12,
    photoAdress: foto12
  },

]



export function App() {
  
  


  const carrossel: any = useRef(null)

  const handleLeftClick = (e: any) => {
    e.preventDefault()


    carrossel.current.scrollLeft -= carrossel.current.offsetWidth
  }

  const handleRightClick = (e: any) => {
    e.preventDefault()

    carrossel.current.scrollLeft += carrossel.current.offsetWidth
  }


  



   

  return (
    <Container >
      
      <Header>
        <img src={logo} alt="" />
        <h1>Kauã Lima Pintor</h1>
        <div >
          <PaintRoller size={30} color="#EDB230"/>
          
        </div>
      </Header>
      
     
      
      <Content>

        <ContentCards >
          <p>Transformando espaços com cor e qualidade</p>

          <section >
            <Card  >
              <HeaderContentCard  >
                <span>
                  <Home size={25} color="#005CB8" />
                </span>
                <p >
                  Sobre Mim
                </p>
              </HeaderContentCard>

              <span>
                <p>
                  Com mais de 6 anos de experiência em pinturas, ofereço serviços de
                  alta qualidade para transformar sua casa ou seu estabelecimento.
                </p>

                <p>
                  Trabalho com dedicação, precisão e cuidado para garantir o melhor
                  em cada projeto
                </p>
              </span>
            </Card>
          </section >
          
          <section >
            <Card >
              <HeaderContentCard>
                <span>
                  <PaintRoller size={25} color="#005CB8" />
                </span>
                <p>
                  Serviços
                </p>
              </HeaderContentCard>

              <ul>
                <li><CheckCircle size={25} color="#31B042" />Pintura Mecanizada</li>
                <li><CheckCircle size={25} color="#31B042" />Lixamento Mecanizado</li>
                <li><CheckCircle size={25} color="#31B042" />Emassamento Geral</li>
                <li><CheckCircle size={25} color="#31B042" />Pinturas em Portões</li>
                <li><CheckCircle size={25} color="#31B042" />Pinturas em Implementos</li>
                <li><CheckCircle size={25} color="#31B042" />Efeito Mármore Polido</li>
              </ul>
            </Card>
          </section>
          
          <section >
            <Card >
              <HeaderContentCard>
                <span>
                  <Star size={25} color="red" />
                </span>
                <p>
                  Diferenciais
                </p>
              </HeaderContentCard>

              <ul>
                <li><Check size={25} color="#31B042" />Qualidade Garantida.</li>
                <li><Check size={25} color="#31B042" />Materiais de primeira Linha.</li>
                <li><Check size={25} color="#31B042" />Pontualidade.</li>
                <li><Check size={25} color="#31B042" />Prazos cumpridos com rigor.</li>
                <li><Check size={25} color="#31B042" />Orçamento gratuito.</li>
                <li><Check size={25} color="#31B042" />Avaliação sem compromisso.</li>
              </ul>
            </Card>
          </section>
          
          <section>
            <Card >
              <HeaderContentCard>
                <span>
                  <Images size={25} color="#005CB8" />
                </span>
                <p>
                  Veja meus serviços
                </p>
              </HeaderContentCard>

              <CarrosselImage>
                <div className="carrossel" ref={carrossel}>
                  {
                    data.map((photo) => (
                      <div className="imageContainer">
                        <img key={photo.id} src={photo.photoAdress} alt="" className="swiperImage" />
                      </div>


                    ))
                  }
                </div>

                <div >
                  <button onClick={handleLeftClick}>
                    <CaretLeft size={32} />
                  </button>
                  <button onClick={handleRightClick}>
                    <CaretRight size={32} />
                  </button>
                </div>
              </CarrosselImage>
            </Card>

          </section>
          
          <section>
            <Card >
              <HeaderContentCard>
                <span>
                  <PhoneCall size={25} color="#005CB8" />
                </span>
                <p id="sobre" >

                  Entre em contato
                </p>
              </HeaderContentCard>

              <Contacts>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <WhatsappLogo size={25} color="#31B042" />
                  Clique e faça seu orçamento pelo whatsApp
                </a>

                <a href="https://www.instagram.com/Kaua_pintura001">
                  <InstagramLogo size={25} color="#E1306C" />
                  Me siga no instagram e acompanhe meu serviço
                </a>
              </Contacts>
            </Card>    
          </section>
        </ContentCards>
      </Content>
    </Container>

  )
}


