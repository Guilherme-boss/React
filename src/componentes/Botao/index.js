import styled from "styled-components";


const BotaoDeVoltar = styled.button`
   display: inline-block;
    border-radius: 30px;
    padding: 0.75rem 1.5rem;
    font-size: 1.125rem;
    font-weight: 600;
    background: linear-gradient(135deg, var(--azul-medio), var(--azul-escuro));
    color: var(--branco);
    border: none;
    cursor: pointer;
    transition: background 0.4s ease, transform 0.4s ease, box-shadow 0.4s ease, filter 0.3s ease;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    
    &:hover {
        background: linear-gradient(135deg, var(--azul-escuro), var(--azul-medio));
        box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.3);
        transform: translateY(-8px);
        filter: brightness(1.1); /* Aumenta o brilho do botão no hover */
    }

    &:active {
        transform: translateY(2px);
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
    }

    @media (max-width: 1100px) {
        padding: 0.75rem 1.5rem;
        font-size: 1.25rem;
    }
`;



function Botao() {
    return(
        <a href="\">
            <BotaoDeVoltar>Voltar</BotaoDeVoltar>
        </a>
    )
}

export default Botao;