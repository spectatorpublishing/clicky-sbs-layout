import React, { Component } from 'react';
import styled from 'styled-components';

const Position = styled.div`
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 99.519vh;
    height: 100px;
    text-align:center;
`
const TextDiv=styled.div`
    display:inline;
    font-weight:700;
    background-color:white;
    color:#004D8C;
    font-size: 10vh;
    filter: ${props =>  props.invert ? 'invert(100%)' : 'invert(0%)'};
`

class TextPage1 extends Component{
    render(){
        return(
        <Position><TextDiv invert={this.props.invert}>{this.props.text}</TextDiv></Position>
        )
    }
}
export default TextPage1;