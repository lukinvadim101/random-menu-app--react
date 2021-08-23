import React, { Component } from 'react';
import styled from 'styled-components'
import { MainBtn } from '../Buttons';
import homer from './homer-simpson-corn-flakes.gif'



const RecipieWrapper = styled.div`
  margin: 2vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const RecepieImg = styled.img`
  margin-top: 2vh;
  max-width:80%;
  border-radius: 5px;
`

export default class Recepie extends Component {

  constructor(props){
    super(props);

    this.state = {
      src: homer
    }
    this.loadData = this.loadData.bind(this)
  }
  rndID(){

    return Math.floor(Math.random() * 6000 + 3000)
  }

  loadData(){
      fetch(`https://api.spoonacular.com/recipes/${this.rndID()}/card?apiKey=e1d76cee53154d0c9aa48f664f89993f`,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then(response => response.json())
        .then(data => {
          console.log('Success:', data);

        this.setState({
          src: data.url
        })

        })
        .catch(err => {
          console.error(err);
        });
    }


  render() {
    return (
      <RecipieWrapper>
        <MainBtn onClick={this.loadData}> Случайный рецепт!</MainBtn>
        <RecepieImg src={this.state.src} alt='test'/>
      </RecipieWrapper>
    );
  }
}
