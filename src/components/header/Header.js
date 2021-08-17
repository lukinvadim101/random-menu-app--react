import React from 'react';
import styled from 'styled-components'

const AppHeader = styled.header `
  color: brown;
  font-size: 1.5em;
  font-weight: bold;
`

const Header = () => {
  return (
    <AppHeader>
      Рандом Меню Апп
    </AppHeader>
  )
}

export default Header;
