import React from 'react';
import styled from 'styled-components'
import ListForm from './ListForm';


const MenuListWrapper = styled.div `
  display: flex;
  width: 250px;
  justify-content: center;
  flex-direction: column;
  justify-content: space-between;
`
const MenuListTitle = styled.h3`
  margin: 25px 0 0 0;
`

const MenuList = styled.ol `
  list-style-type: none;
  padding: 0;
  font-size: .85em;
`
const MenuListItem = styled.li `
  margin-top: 4px;
  padding: 0;
  &:hover {
    transition: .4s;
    text-decoration: line-through;
    cursor: pointer;
  }
`

const Conatiner = styled.div `
  display:flex;
  flex-direction: column;
  justify-content: space-between;
`
const FoodList = (props)=> {

  const foodList = props.list;
  const foodType = props.foodType;

  const renderFood = (foodList)=> {
    return(
      foodList.map((item, index) =>
        <MenuListItem
          onClick={ () => props.onDelete(foodList, index, foodType)}
          key={item.id}
        >
          {item.name}
        </MenuListItem>
      )
    )
  }

  return (
    <MenuListWrapper>
      <Conatiner>
        <MenuListTitle>
          {props.title}
        </MenuListTitle>
        <MenuList>
            {renderFood(foodList)}
        </MenuList>
      </Conatiner>
      <ListForm
        list     = {props.list}
        foodType = {props.foodType}
        onAdd    = {props.onAdd}
      />
    </MenuListWrapper>
    )
  }

export default FoodList;
