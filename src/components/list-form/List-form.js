import React, { Component } from 'react';
import styled from 'styled-components';

const ListFormWrapper = styled.div `
  display: flex;
  align-content: center;
  justify-content: center;
  margin-top: 10px;
`
const TextInput = styled.input `
  width: 33%;
  padding: 5px 15px;
  margin: 8px 0;
  border:2px solid #1f2f47;
  border-radius: 3px;
`
const BtnInput = styled.input `
  width: 20%;
  background-color: #fff;
  padding: 5px 15px;
  margin: 8px 0;
  border:2px solid #1f2f47;
  border-radius: 3px;
  font-weight: bold;
  cursor: pointer;
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
    const {foodList, foodType} = this.props;
    e.preventDefault();
    this.props.onAdd(this.state.text, foodType, foodList);
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <ListFormWrapper>
        <form onSubmit = {this.onSubmit}>
          <TextInput
            type="text"
            onChange={this.onValueChange}
            value={this.state.text} //управялемый элемент
            />
          <BtnInput
            type="submit"
            value="+" />
        </form>
      </ListFormWrapper>
    );
  }
}