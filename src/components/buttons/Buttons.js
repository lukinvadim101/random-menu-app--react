import React from 'react';
import styled from 'styled-components'

const MainBtn = styled.button`
  font-size: .9em;
  box-sizing: border-box;
  width: 76%;
  background: brown;
  border-radius:5px;
  border:2px solid #1f2f47;
  cursor:pointer;
  color:#fff ;
  font-weight:bold;
  padding:5px 5px;
  text-decoration:none;
  line-height: 2.5em;
  &:hover{
    background: #fff;
    color: brown;
    transition: .5s;
  }
  &:active{

    position:relative;
    top:3px;
  }
`
const Btn = styled(MainBtn)`
  width: 19%;
  line-height: .9em;
  font-size:.7em;
`
const BtnContainer = styled.div `
  margin-top: .1vh;
  display: flex;
  justify-content:center;
  flex-wrap:wrap;
`

const Buttons = (props) => {
  const {veg, sideDish, dish, extra, drink} = props.foodLists;
  return (
    <div>
      <MainBtn
        onClick={(e) => props.rndAll(e, dish, sideDish, extra, veg, drink)}>
        Комплексное питание
      </MainBtn>
      <BtnContainer>
        <Btn onClick={(e) => props.rndInCategroy(e,dish,veg)}>Блюдо <br/> + <br/> Зелень</Btn>
        <Btn onClick={(e) => props.rndInCategroy(e,dish,sideDish)}>Блюдо <br/> + <br/> Гарнир</Btn>
        <Btn onClick={(e) => props.rndInCategroy(e,dish,extra)}>Блюдо <br/> + <br/> Допы</Btn>
        <Btn onClick={(e) => props.rndInCategroy(e,veg,extra)}>Зелень <br/> + <br/> Допы</Btn>
      </BtnContainer>
    </div>
  )
}

export default Buttons;