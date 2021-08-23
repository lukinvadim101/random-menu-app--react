
import React from 'react';
import FoodList from './FoodList';
import styled from 'styled-components';

const MenuListGroup = styled.div `

  background: #8A3324;
  width: auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-bottom: 1vh;
  margin-bottom: 1vh;
  border-radius: 5px;
  padding-bottom: 3vh;
`;

export default class ListGroup extends React.Component {
  constructor(props){
    super(props);
    this.menuType = ['withSideDish', 'sideDish','extra','veg','special'];
    this.titles   = ["Блюдо","Гарнир","Допы","Зелёное",  "Особое!"];
  }
  render() {
    const {withSideDish, sideDish, veg, extra,special} = this.props.foodLists;
    return (
      <MenuListGroup>
        <FoodList list      = {withSideDish}
                  onDelete  = {this.props.onDelete}
                  onAdd     = {this.props.onAdd}
                  foodType  = {this.menuType[0]}
                  title     = {this.titles[0]}
        />
        <FoodList list      = {sideDish}
                  onDelete  = {this.props.onDelete}
                  onAdd     = {this.props.onAdd}
                  foodType  = {this.menuType[1]}
                  title     = {this.titles[1]}
        />
        <FoodList list      = {extra}
                  onDelete  = {this.props.onDelete}
                  onAdd     = {this.props.onAdd}
                  foodType  = {this.menuType[2]}
                  title     = {this.titles[2]}
        />
        <FoodList list      = {veg}
                  onDelete  = {this.props.onDelete}
                  onAdd     = {this.props.onAdd}
                  foodType  = {this.menuType[3]}
                  title     = {this.titles[3]}
        />
         <FoodList list     = {special}
                   onDelete = {this.props.onDelete}
                   onAdd    = {this.props.onAdd}
                   foodType = {this.menuType[4]}
                   title    = {this.titles[4]}
        />
      </MenuListGroup>
    );
  }
}