import minhafoto from '../../acessos/minha_foto.png';
import styled from 'styled-components';

const BannerContainer = styled.div`
  padding: 3rem 15%;
  color: #E5E7EB;
  display: flex;
  align-items: center;
  height: 520px;
  justify-content: center;
  gap: 15rem;

  @media (max-width: 1024px) {
    padding: 3rem 8%;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 2rem 5%;
    text-align: center;
  }
`;

const Apresentacao = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 400px;

  @media (max-width: 768px) {
    align-items: center;
    max-width: 100%;
  }
`;

const Titulo = styled.h1`
  font-family: var(--fonte-secundaria);
  font-size: 3.5rem;
  margin: 0;
  letter-spacing: 1px; /* Aumenta o espaçamento entre letras */
  color: #1abc9c; /* Cor destacada para o título */

  @media (max-width: 768px) {
    font-size: 2.8rem;
  }

  @media (max-width: 480px) {
    font-size: 2.4rem;
  }
`;

const Paragrafo = styled.p`
  font-family: var(--fonte-secundaria);
  font-size: 1.5rem;
  line-height: 1.7rem;
  margin-top: 1rem;
  color: #CBD5E0; /* Cor cinza claro para contraste */
  max-width: 500px;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    line-height: 1.6rem;
    max-width: 100%;
  }
`;

const MinhaFoto = styled.img`

  width: 220px;
  height: 300px;
  object-fit: cover; 
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.3);
  border-radius: 85px; 
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05); 
    box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.35);
  }

  @media (max-width: 768px) {
    width: 180px;
    height: 240px;
    margin-top: 1.5rem;
  }

  @media (max-width: 480px) {
    width: 150px;
    height: 200px;
  }
`;


function Banner() {
  return (
    <BannerContainer>
      <Apresentacao>
        <Titulo>hello guys!</Titulo>
        <Paragrafo>
            Welcome to my personal space! I am Guilherme Ferreira. Here, I share various knowledge, and I hope you learn something new :)        </Paragrafo>
      </Apresentacao>
      <MinhaFoto src={minhafoto} alt="foto sorrindo" />
    </BannerContainer>
  );
}

export default Banner;
