import React from 'react';

import Header from '../header/Header'
import ListGroup from '../list-group/List-group';
import Output from '../output/Output';
import Buttons from '../buttons/Buttons';

import styled from 'styled-components'
import data from '../../json/menu.json';


const App = styled.div`
  text-align: center;
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: calc(10px + 2vmin);
  color: white;
`
const MenuWrapper = styled.div`
  margin-top: 4vh;
  display: flex;
  justify-content: space-between;
  width: 85vw;
  flex-direction: column;
`

export default class MenuApp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      menu: {
        veg:       data.veg,
        dish:      data.dish,
        sideDish:  data.sideDish,
        extra:     data.extra,
        drink:     data.drink
      },
      MenuRndOutput: '⬇ генератор еды ⬇'
    }

    this.deleteItem       = this.deleteItem.bind(this)
    this.addItem          = this.addItem.bind(this)
    this.randomize        = this.randomize.bind(this)
    this.rndInCategroy    = this.rndInCategroy.bind(this)
    this.rndAll           = this.rndAll.bind(this)

    this.maxId = 50
  }

  randomize(arr){
    let res = arr
      .map((item) => item.name)
      [Math.floor(Math.random() * arr.length)]
    return res
  }

  deleteItem(data, index, menuType){
    let filteredMenu = data.slice(0, index).concat(data.slice(index + 1, data.length))

    this.setState(state => ({
      menu: {
        ...state.menu,
        [menuType]: filteredMenu,
      },
    }))
  }

  addItem(data, foodType, foodList){
    const newItem = {
      name: data,
      id: this.maxId++
    }

    this.setState(state => ({
      menu: {
        ...state.menu,
        [foodType]: [...foodList, newItem],
      },
    }))
  }

  rndInCategroy(e, list_one, list_two){
    const rnd = this.randomize

    this.setState({
      MenuRndOutput: rnd(list_one) + ' + ' + rnd(list_two)
    })
  }

  rndAll(e, list_one, list_two, list_three, list_four, list_five){
    const rnd = this.randomize

    this.setState({
      MenuRndOutput: rnd(list_one) + ' + ' + rnd(list_two) +  ' + ' + rnd(list_three) + ' + ' + rnd(list_four) + ' + ' + rnd(list_five)
    })
  }

  render(){
    return (
      <App>
        <MenuWrapper>
          <Header/>
          <Output
              MenuRndOutput = {this.state.MenuRndOutput}
            />
            <Buttons
              foodLists          = {this.state.menu}
              rndInCategroy     = {this.rndInCategroy}
              rndAll     = {this.rndAll}
            />
            <ListGroup
              foodLists          = {this.state.menu}
              onDelete      = {this.deleteItem}
              onAdd         = {this.addItem}
            />
        </MenuWrapper>
      </App>
    )
  }

}
