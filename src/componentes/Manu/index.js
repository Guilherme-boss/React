import React from 'react';
import styled from 'styled-components';
import MenuLink from '../MenuLink';

const Navegacao = styled.nav`
    height: 112px;
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 3rem;
    background-color: #1F2937;
    padding: 1rem;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    border-bottom: 2px solid rgba(255, 255, 255, 0.1); 

    @media (max-width: 1024px) {
        column-gap: 2rem; */
    }

    @media (max-width: 768px) {
        flex-direction: column;
        height: auto;
        padding: 1.5rem;
        row-gap: 1.5rem;
    }

    @media (max-width: 480px) {
        padding: 1rem; 
        row-gap: 1rem; 
    }
`;


function Menu() {
    return (
        <header>
            <Navegacao>
                <MenuLink to="/">
                    Home
                </MenuLink>
                <MenuLink to="/sobremim">About Me</MenuLink>
                <p to="/"Home></p>
            </Navegacao>
        </header>
    );
}

export default Menu;
