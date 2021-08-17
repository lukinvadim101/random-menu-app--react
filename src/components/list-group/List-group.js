
import React from 'react';
import MenuList from '../list/List';
import styled from 'styled-components'

const MenuListGroup = styled.div `
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`

export default class ListGroup extends React.Component {
  constructor(props){
    super(props);
    this.menuType = ['dish','sideDish','extra','veg','drink']
    this.titles   = ["Блюдо","Гарнир","Допы","Зелень", "Напиток"]
  }
  render() {
    const {veg, sideDish, dish, extra,drink} = this.props.foodLists;
    return (
      <MenuListGroup>
        <MenuList foodList = {dish}
                  onDelete = {this.props.onDelete}
                  onAdd    = {this.props.onAdd}
                  foodType = {this.menuType[0]}
                  title    = {this.titles[0]}
        />
        <MenuList foodList = {sideDish}
                  onDelete = {this.props.onDelete}
                  onAdd    = {this.props.onAdd}
                  foodType = {this.menuType[1]}
                  title    = {this.titles[1]}
        />
        <MenuList foodList = {extra}
                  onDelete = {this.props.onDelete}
                  onAdd    = {this.props.onAdd}
                  foodType = {this.menuType[2]}
                  title    = {this.titles[2]}
        />
        <MenuList foodList = {veg}
                  onDelete = {this.props.onDelete}
                  onAdd    = {this.props.onAdd}
                  foodType = {this.menuType[3]}
                  title    = {this.titles[3]}
        />
        <MenuList foodList = {drink}
                  onDelete = {this.props.onDelete}
                  onAdd    = {this.props.onAdd}
                  foodType = {this.menuType[4]}
                  title    = {this.titles[4]}
        />
      </MenuListGroup>
    )
  }
}