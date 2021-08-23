import React from 'react';
import styled from 'styled-components'

const BtnContainer = styled.div `
  width: 60%;
  display: flex;
  align-self:center;
  justify-content: space-evenly;
  margin: 0 0 3vh 0;

`
const MainBtn = styled.button`
  font-size: .8em;
  box-sizing: border-box;
  background: #8A3324;
  border-radius:5px;
  border:0;
  cursor:pointer;
  color:#fff;
  font-weight:bold;
  padding:15px 15px;
  margin: 10px;
  text-decoration:none;
  &:hover{
    background: #fff;
    color: brown;
    transition: .5s;
  }
  &:active{
    position:relative;
    top:2px;
  }
`
const Btn = styled(MainBtn)`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Buttons = (props) => {
  const {withSideDish ,sideDish, veg, extra, special} = props.foodLists;
  return (

   <BtnContainer>
      <Btn onClick={(e) => props.rndInCategroy(e, veg)}>Зелёное</Btn>
      <MainBtn
        onClick={(e) => props.rndAll(e, withSideDish, sideDish, extra)}>
        Блюдо  + Гарнир + Допы
      </MainBtn>
        <Btn onClick={(e) => props.rndInCategroy(e, special)}>Особое!</Btn>
    </BtnContainer>
  )
}

export default Buttons;
export {MainBtn}