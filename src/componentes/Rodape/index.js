import { ReactComponent as Marca } from '../../acessos/marca_registrada.svg'
import styled from 'styled-components';


const RodapeContainer = styled.footer`
    background-color: var(--azul-escuro);
    color: var(--branco);
    padding: 2rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: .5rem;

`


function Rodape() {
    return(
        <RodapeContainer>
            <Marca />
            Criado por Guilherme dev
            

        </RodapeContainer >
    )
}

export default Rodape;