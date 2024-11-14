import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledNavLink = styled(NavLink)`
    font-size: 1.15rem;
    color: #ecf0f1;
    text-decoration: none;
    padding: 0.5rem 0;
    margin: 0 1.5rem;
    position: relative;
    transition: color 0.3s ease, transform 0.3s ease;
    font-weight: bold;
    letter-spacing: 1px;

    &.active {
        color: #1abc9c;
        font-weight: bolder;
        text-shadow: 0px 4px 10px rgba(26, 188, 156, 0.5);
    }

    &:hover {
        color: #1abc9c;
        transform: translateY(-3px) scale(1.05);
        text-shadow: 0px 4px 8px rgba(26, 188, 156, 0.3);
    }

    &.active::after {
        content: '';
        display: block;
        width: 100%;
        height: 3px;
        background-color: #1abc9c;
        position: absolute;
        bottom: -6px;
        left: 0;
        border-radius: 2px;
        box-shadow: 0px 2px 6px rgba(26, 188, 156, 0.5);
    }

    &:not(.active)::after {
        content: '';
        display: block;
        width: 0;
        height: 3px;
        background-color: #1abc9c;
        position: absolute;
        bottom: -6px;
        left: 0;
        border-radius: 2px;
        transition: width 0.4s ease;
    }

    &:hover::after {
        width: 100%;
        box-shadow: 0px 4px 8px rgba(26, 188, 156, 0.3);
    }

    &:focus-visible {
        outline: none;
        border-bottom: 2px dashed #1abc9c;
    }

    @media (max-width: 768px) {
        font-size: 1rem;
        margin: 0 1rem; 
    }

    @media (max-width: 480px) {
        font-size: 0.9rem;
        margin: 0 0.5rem; 
        padding: 0.3rem 0;
    }
`;

function MenuLink({ children, to }) {
    return (
        <StyledNavLink to={to} end activeClassName="active">
            {children}        

        </StyledNavLink>
    );
}

export default MenuLink;
