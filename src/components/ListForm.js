import React, { Component } from 'react';
import styled from 'styled-components';

const ListFormWrapper = styled.div `
  display: flex;
  justify-content: center;
`
const TextInput = styled.input `
  width: 100px;
  padding: 2px 10px;
  border:0;
  border-radius: 5px;
  margin-right: 10px;;
`
const BtnInput = styled.button `
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  padding: 0;
  border:0;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  font-family: none;


`

export default class ListForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      text: ''
    };

    this.onValueChange = this.onValueChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onValueChange(e) {
    this.setState({
        text: e.target.value
    })
  }

  onSubmit(e){
    const {list, foodType} = this.props;
    e.preventDefault();
    this.props.onAdd(this.state.text, foodType, list);
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <form onSubmit = {this.onSubmit}>
        <ListFormWrapper>
          <TextInput
            type="text"
            onChange={this.onValueChange}
            value={this.state.text} //управялемый элемент
            />
          <BtnInput type="submit">
            +
          </BtnInput>
        </ListFormWrapper>
      </form>
    );
  }
}