import styled from 'styled-components';
import Botao from '../Botao';


const PostModeloContainer = styled.article`
    color: var(--cor-fonte-post);
    position: relative;
`;

const Titulo = styled.h2`
    font-family: var(--fonte-secundaria);
    padding: 0 7.5rem;
    font-size: 5rem;
    display: flex;
    align-items: center;
    text-align: center; 
    line-height: 1.2; 

    @media (max-width: 1024px) {
        padding: 0 4rem; 
        font-size: 3.5rem;
    }

    @media (max-width: 744px) {
        padding: 0 1rem;
        font-size: 2rem;
    }
`;

const PostConteudoContainer = styled.div`
    padding: 3.5rem 7.5rem 4.5rem;

    @media (max-width: 744px) {
        padding: 2rem 1rem 1.5rem;
    }
`;





function PostModelo({titulo,children}) {
    return(
        <PostModeloContainer>
            <Titulo>
                {titulo}
            </Titulo>
            <PostConteudoContainer>
                {children}
                <Botao />
            </PostConteudoContainer>
        </PostModeloContainer>
    )
}

export default PostModelo;