import React, { Component } from 'react';
import styled from 'styled-components';

const Position = styled.div`
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 55rem;
    height: 15rem;
    text-align:center;
`
const TextDiv=styled.div`
    display:inline;
    font-weight:700;
    background-color:white;
    color:#004D8C;
    font-size: 10vh;
`

class TextPage1 extends Component{
    render(){
        return(
        <Position><TextDiv>{this.props.text1}<br/>{this.props.text2}</TextDiv></Position>
        )
    }
}
export default TextPage1;