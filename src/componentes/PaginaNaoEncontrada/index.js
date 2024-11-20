import styled from "styled-components";


const NaoEncontrada = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: linear-gradient(135deg, #1a202c, #2d3748);
    color: #e2e8f0;
    text-align: center;
    padding: 2rem;
    position: relative;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: -20%;
        left: -20%;
        width: 140%;
        height: 140%;
        background: radial-gradient(circle, rgba(255, 255, 255, 0.1), transparent 80%);
        animation: rotateGlow 15s linear infinite;
        z-index: 0;
    }

    &::after {
        content: '';
        position: absolute;
        bottom: -30%;
        right: -30%;
        width: 150%;
        height: 150%;
        background: radial-gradient(circle, rgba(255, 255, 255, 0.05), transparent 85%);
        animation: rotateGlow 20s linear reverse infinite;
        z-index: 0;
    }

    @keyframes rotateGlow {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    @media (max-width: 480px) {
        padding: 1rem;
    }
`;

const ErrorCode = styled.h1`
    font-size: 9rem;
    font-weight: 800;
    margin: 0;
    color: #e53e3e;
    text-shadow: 0 8px 20px rgba(229, 62, 62, 0.5), 0 -3px 10px rgba(229, 62, 62, 0.3);
    animation: bounce 1.5s infinite;

    @keyframes bounce {
        0%, 100% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-10px);
        }
    }

    @media (max-width: 768px) {
        font-size: 7rem;
    }

    @media (max-width: 480px) {
        font-size: 5rem;
    }
`;

const ErrorMessage = styled.p`
    font-size: 1.8rem;
    margin: 1.5rem 0;
    color: #cbd5e0;
    line-height: 1.7;
    max-width: 80%;
    text-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);
    z-index: 1;

    @media (max-width: 768px) {
        font-size: 1.5rem;
    }

    @media (max-width: 480px) {
        font-size: 1.3rem;
    }
`;

const HomeLink = styled.a`
    margin-top: 2.5rem;
    font-size: 1.2rem;
    color: #00000;
    text-decoration: none;
    background: linear-gradient(90deg, #38b2ac, #4fd1c5);
    padding: 0.8rem 2rem;
    border-radius: 50px;
    font-weight: 600;
    text-transform: uppercase;
    transition: all 0.3s ease;
    z-index: 1;
    box-shadow: 0 6px 15px rgba(56, 178, 172, 0.5);

    &:hover {
        background: linear-gradient(90deg, #4fd1c5, #38b2ac);
        color: #1a202c;
        transform: translateY(-4px) scale(1.05);
        box-shadow: 0 10px 25px rgba(56, 178, 172, 0.7);
    }

    &:active {
        transform: translateY(2px) scale(0.95);
        background: linear-gradient(90deg, #319795, #2c7a7b);
        box-shadow: 0 3px 8px rgba(56, 178, 172, 0.4);
    }

    @media (max-width: 768px) {
        font-size: 1.1rem;
        padding: 0.6rem 1.8rem;
    }

    @media (max-width: 480px) {
        font-size: 1rem;
        padding: 0.5rem 1.5rem;
    }
`;





function PaginaNaoEncontrada() {
    return(
            <NaoEncontrada>
                <ErrorCode>404</ErrorCode>
                <ErrorMessage>Pagina não encontrada</ErrorMessage>
                <HomeLink href="/">Voltar para a Página Inicial</HomeLink>
            </NaoEncontrada>
    )

}

export default PaginaNaoEncontrada;