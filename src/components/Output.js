import React from 'react';
import styled from 'styled-components'

const HeaderOutput = styled.h3 `
  margin-top: 2vh;
  color:#fff;
  display:flex;
  justify-content: center;
`

const Output = (props) => {

  return (
    <>
      <HeaderOutput>
        {props.MenuRndOutput}
      </HeaderOutput>
    </>
  )
}

export default Output;
