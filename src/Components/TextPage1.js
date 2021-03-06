import React, { Component } from 'react';
import styled from 'styled-components';

const Position = styled.div`
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 80%;
    height: 15rem;
    text-align:center;
    font-size: 6rem;
    @media (max-width: 700px) {
        font-size: 3rem;
        width: 90%;
    }
`
const TextDiv=styled.div`
    display:inline;
    font-weight:700;
    background-color:white;
    color:#004D8C;
`
const Image = styled.img`
    width: 50%;
    position: absolute;
    margin: auto;
    top: 50%;
    left: 50%;
    height: auto;
    transform: translate(-50%, -50%);
    @media (max-width: 700px) {
        width: 90%; 
        top:65%;       
    }
`

class TextPage1 extends Component{
    render(){
        return(
            <div>
                <Image src={this.props.image}/>
                <Position><TextDiv>{this.props.text1}<br/>{this.props.text2}</TextDiv></Position>
            </div>
        )
    }
}
export default TextPage1;