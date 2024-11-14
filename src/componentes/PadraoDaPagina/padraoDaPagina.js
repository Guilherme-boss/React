import { Outlet } from 'react-router-dom';
import Banner from '../Banner';
import styled from 'styled-components';

const MainContainer = styled.main`
  background: linear-gradient(to bottom, #1E2A38, #334155); 
  min-height: 100vh;
  padding-top: 1rem; 
`;


function PadraoDaPagina() {
    return(
        <MainContainer>

            <Banner />
            
            <Outlet />
    
        </MainContainer>
    )

}
export default PadraoDaPagina;