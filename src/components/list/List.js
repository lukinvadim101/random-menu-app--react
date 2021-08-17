import React from 'react';
import styled from 'styled-components'
import MenuListForm from '../list-form/List-form';

const MenuListItem = styled.li `
  margin: 0;
  padding: 0;
  &:hover {
    text-decoration: line-through;
    cursor: pointer;
  }
`
const MenuListWrapper = styled.div `
  ${'' /* width: 80%; */}
  justify-content: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const MenuList = styled.ol `
  list-style-type: none;
  margin: 0;
  padding: 0;
  font-size: .8em;
  `
const Conatiner = styled.div `
  display:flex;
  flex-direction: column;
  justify-content: space-between;
`
const List = (props)=> {

  const foodList = props.foodList;
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
        <h3>
          {props.title}
        </h3>
        <MenuList>
            {renderFood(foodList)}
        </MenuList>
      </Conatiner>
      <MenuListForm
        foodList = {props.foodList}
        foodType = {props.foodType}
        onAdd    = {props.onAdd}
      />
    </MenuListWrapper>
    )
  }

export default List;
