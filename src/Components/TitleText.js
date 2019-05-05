import React, { Component } from 'react';
import styled from 'styled-components';

const Position = styled.div`
    position: absolute;
    margin:auto;
    margin-left: 5rem;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 50rem;
    height: 25rem;
    text-align:left;
`
const TextDiv=styled.div`
    display:inline;
    font-weight:700;
    background-color:white;
    color:#004D8C;
    font-size: 7rem;
`

class TitleText extends Component{
    render(){
        return(
        <Position><TextDiv>{this.props.title}</TextDiv></Position>
        )
    }
}
export default TitleText;