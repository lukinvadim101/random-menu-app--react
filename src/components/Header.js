import React from 'react';
import {Link} from "react-router-dom";

import styled from 'styled-components';

const AppHeader = styled.header `
  font-size: 1.5em;
  font-weight: bold;
`;
const NavList = styled.div`
  margin-top:2vh;
  display: flex;
  width: 80vw;
  justify-content: center;
  align-items: center;
  a{
    margin: 0 2vh;
    text-decoration: none;
    font-weight: bold;
    color: #8A3324;
    :focus{
      transition: .4s;
      color: #fff;
    }
  }
`;
const NavWrapper = styled.div`
  margin-top:2vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Header = () => {
  return (
    <NavWrapper>
      <AppHeader>
        Меню Апп
      </AppHeader>
      <NavList>
        <Link to="/">Рандомайзер Еды</Link>
        <div>&</div>
        <Link to="/recepie">Случайный Рецепт</Link>
      </NavList>
    </NavWrapper>
  );
};

export default Header;
