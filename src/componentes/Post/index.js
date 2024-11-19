import { Link } from 'react-router-dom';
import styled from 'styled-components';


const PostContainer = styled.div`
    text-align: center;
    width: 280px;
    min-height: 460px; 
    padding: 1.2rem;
    margin-bottom: 2rem; 
    border-radius: 20px;
    background-color: #3a4655;
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.1);
    transition: transform 0.4s ease, box-shadow 0.4s ease, background-color 0.4s ease, filter 0.3s ease;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    overflow: hidden;

    &:hover {
        transform: translateY(-10px);
        box-shadow: 0px 18px 35px rgba(0, 0, 0, 0.2);
        background-color: #545f6d;
    }

    &:active {
        transform: translateY(-2px);
        box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);
    }

    @media (max-width: 1100px) {
        width: 320px;
        padding: 1.25rem;
    }
`;

const Capa = styled.img`
    width: 100%;
    border-radius: 18px 18px 0 0;
    transition: transform 0.4s ease, box-shadow 0.4s ease, opacity 0.4s ease;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
    object-fit: cover;

    &:hover {
        opacity: 0.95;
        transform: scale(1.08);
        box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.3);
    }
`;


const Titulo = styled.h2`
    font-family: var(--fonte-secundaria);
    font-size: 1.3rem;
    color: #25c7a7;
    line-height: 1.8rem;
    margin: 1.25rem 0;
    font-weight: 600;
    letter-spacing: 0.5px;
    transition: color 0.4s ease, transform 0.4s ease, text-shadow 0.4s ease;

    &:hover {
        color: #25c7a7;
        transform: scale(1.05);
        text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    }

    @media (max-width: 1100px) {
        font-size: 1.5rem;
        margin: 1rem 0;
    }
`;

const BotaoLer = styled.button`
    display: inline-block;
    border-radius: 30px;
    padding: 0.75rem 1.5rem;
    font-size: 1.125rem;
    font-weight: 600;
    background: linear-gradient(135deg, #1e5951, #54a197); 
    color: #fff;
    border: none;
    cursor: pointer;
    transition: background 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
    box-shadow: 0px 6px 15px rgba(0, 78, 146, 0.2); 

    &:hover {
        background: linear-gradient(135deg, #54a197, #1e5951);
        box-shadow: 0px 10px 25px rgba(0, 78, 146, 0.4); 
        transform: translateY(-5px) scale(1.05); 
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





function Post({post, Children}) {

    return (
        <Link to={`/cards/${post.id}`}>
        <PostContainer>
            <Capa
                src={`/assetss/posts/${post.id}/capa.png`}
                alt='capa'
            />    

            <Titulo>
                {post.titulo}
                {Children}
            </Titulo>

            <BotaoLer>To read</BotaoLer>

        </PostContainer>
        </Link>
    )
}

export default Post;