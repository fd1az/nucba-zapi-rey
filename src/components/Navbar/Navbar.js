import React from 'react';
import styled from 'styled-components'
import imgLogo from '../../assets/nucbazappiintegral.png';

// style components

const NavbarStyled = styled.div `
  padding: 10px;
  display: flex;
  align-items: center;
  background-color: #fff;
  width: 100%;
  z-index: 999;
  border-bottom: 1px solid #e5edef;
`;

const Logo = styled.img `
  max-width: 200px;
  height: auto;
`;

export const Navbar = () => { //componente comun y corriente
    return ( 
        <NavbarStyled >
        <Logo src = { imgLogo }/> 
        </NavbarStyled>
    );
};