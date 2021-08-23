import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Header from '../Header';
import Recepie from '../recipe/Recepie';
import ListGroup from '../List-group';
import Output from '../Output';
import Buttons from '../Buttons';

import styled from 'styled-components';
import data from '../../json/menu.json';

const App = styled.div`
  min-height: 100vh;
  text-align: center;
  background-color: 7B3B3B;
  background: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(9px + 2vmin);
  color: white;
`;

const MenuWrapper = styled.div`
  margin-top: 4vh;
  display: flex;
  justify-content: space-between;
  width: 85vw;
  flex-direction: column;
`;
export default class MenuApp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      menu: {
        sideDish:  data.sideDish,
        withSideDish: data.withSideDish,
        veg:       data.veg,
        extra:     data.extra,
        special:      data.special,
      },
      MenuRndOutput: '...'
    };

    this.deleteItem       = this.deleteItem.bind(this);
    this.addItem          = this.addItem.bind(this);
    this.randomize        = this.randomize.bind(this);
    this.rndInCategroy    = this.rndInCategroy.bind(this);
    this.rndAll           = this.rndAll.bind(this);

    this.maxId = 50;
  }

  randomize(arr){
    let res = arr
      .map((item) => item.name)[Math.floor(Math.random() * arr.length)];
    return res;
  }

  deleteItem(data, index, menuType){
    let filteredMenu = data.slice(0, index).concat(data.slice(index + 1, data.length));

    this.setState(state => ({
      menu: {
        ...state.menu,
        [menuType]: filteredMenu,
      },
    }));
  }

  addItem(data, foodType, foodList){
    const newItem = {
      name: data,
      id: this.maxId++
    };

    this.setState(state => ({
      menu: {
        ...state.menu,
        [foodType]: [...foodList, newItem],
      },
    }));
  }

  rndInCategroy(e, foodList){
    const rnd = this.randomize;
    if(foodList.length <= 1){
      this.setState({
        MenuRndOutput: 'нужно больше простора для выбора...'
      });
    }
    else {
      this.setState({
        MenuRndOutput: rnd(foodList)
      });
    }

  }

  rndAll(e, one, two, three){
    const rnd = this.randomize;

    if ([...one, ...two, ...three].length < 9 ) {
      this.setState({
        MenuRndOutput: 'нужно больше простора для выбора...'
      });
    }
    else if (one.length === 0 ) {
      this.setState({
        MenuRndOutput: rnd(two) +  ' + ' + rnd(three)
      });
    }
    else if (two.length === 0 ) {
      this.setState({
        MenuRndOutput: rnd(one) +  ' + ' + rnd(three)
      });
    }
    else if (three.length === 0 ) {
      this.setState({
        MenuRndOutput: rnd(one) +  ' + ' + rnd(two)
      });
    }
    else {
      this.setState({
        MenuRndOutput: rnd(one) + ' + ' + rnd(two) +  ' + ' + rnd(three)
      });
    }
  }

  render(){
    return (
      <Router>
        <App>
        <Header/>
        <Switch>
          <Route exact path="/">
            <MenuWrapper>
              <Output
                  MenuRndOutput = {this.state.MenuRndOutput}
                />
                <Buttons
                  foodLists          = {this.state.menu}
                  rndInCategroy      = {this.rndInCategroy}
                  rndAll             = {this.rndAll}
                />
                <ListGroup
                  foodLists          = {this.state.menu}
                  onDelete           = {this.deleteItem}
                  onAdd              = {this.addItem}
                />
            </MenuWrapper>
          </Route>
          <Route exact path="/recepie">
            <Recepie/>
          </Route>
        </Switch>
        </App>
      </Router>
    );
  }
}
