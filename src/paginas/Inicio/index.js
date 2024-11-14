import posts from '../../json/posts.json';
import Post from '../../componentes/Post';
import styled from 'styled-components';

const ListaDePost = styled.ul`
    padding: 0 6vw 3.625rem;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1.5rem;
    margin-top: -2.5rem;
`;

const ItemPost = styled.li`
    list-style: none;
    width: 280px;
    border-radius: 10px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s, box-shadow 0.3s;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.15);
    }
`;

function Inicio() {
    return (
        <ListaDePost>
            {posts.map((post) => (
                <ItemPost key={post.id}>
                    <Post post={post} />
                </ItemPost>
            ))}
        </ListaDePost>
    );
}

export default Inicio;
