import React, { Component } from 'react';
import styled from 'styled-components';

const Position = styled.div`
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 60%;
    height: 15rem;
    text-align:center;
    font-size: 4rem;
    @media (max-width: 700px) {
        font-size: 2rem;
        width: 90%;
    }
`
const Larger = styled.div`
    font-size: 6rem;
    @media (max-width: 700px) {
        font-size: 3rem;
    }
`
const TextDiv=styled.div`
    display:inline;
    color:white;
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
    }
`

class TextPage1 extends Component{
    render(){
        return(
            <div>
                <Image src={this.props.image}/>
                <Position><TextDiv><i>{this.props.text1}</i><br/><Larger><i>{this.props.text2}</i></Larger></TextDiv></Position>
            </div>
        )
    }
}
export default TextPage1;