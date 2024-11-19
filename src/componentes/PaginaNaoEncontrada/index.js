import styled from "styled-components";


const NaoEncontrada = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: linear-gradient(135deg, #f0f4f8, #d9e2ec);
    text-align: center;
    color: #333;
    padding: 0 1.5rem;
    box-shadow: inset 0px 8px 15px rgba(0, 0, 0, 0.1);

    @media (max-width: 480px) {
        padding: 0 1rem;
    }
`;

const ErrorCode = styled.h1`
    font-size: 6rem;
    font-weight: bold;
    margin: 0;
    color: #ff6b6b; /* Vermelho suave */
    text-shadow: 0px 6px 12px rgba(0, 0, 0, 0.15);
    @media (max-width: 768px) {
        font-size: 4rem;
    }

    @media (max-width: 480px) {
        font-size: 3rem;
    }
`;

const ErrorMessage = styled.p`
    font-size: 1.5rem;
    margin: 1rem 0;
    color: #555;
    line-height: 1.7;
    max-width: 80%;
    opacity: 0.9;
    text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

    @media (max-width: 768px) {
        font-size: 1.3rem;
    }

    @media (max-width: 480px) {
        font-size: 1.1rem;
    }
`;

const HomeLink = styled.a`
    margin-top: 2rem;
    font-size: 1.1rem;
    color: #1d72b8;
    text-decoration: none;
    border: 2px solid #1d72b8;
    padding: 0.6rem 1.4rem;
    border-radius: 30px;
    transition: all 0.3s ease;
    box-shadow: 0px 4px 12px rgba(29, 114, 184, 0.2);
    font-weight: 600;

    &:hover {
        background-color: #1d72b8;
        color: #fff;
        box-shadow: 0px 8px 20px rgba(29, 114, 184, 0.3);
        transform: translateY(-3px) scale(1.05);
    }

    @media (max-width: 768px) {
        font-size: 1rem;
        padding: 0.5rem 1.2rem;
    }

    @media (max-width: 480px) {
        font-size: 0.9rem;
        padding: 0.4rem 1rem;
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