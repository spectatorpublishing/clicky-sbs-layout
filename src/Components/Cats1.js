import React, { Component } from 'react';
import styled from 'styled-components';

const Position = styled.div`
    position: absolute;
    margin: auto;
    top: 15%;
    right: 0;
    bottom: 0;
    left: 0;
    width: 40%;
    text-align:left;
    font-size: 2.5rem;
    @media (max-width: 700px) {
        font-size: 1.8rem;
        width: 90%;
    }
`

const TextDiv=styled.div`
    display:inline;
    color:white;
`
const Image = styled.img`
    width: 100%;
    position: absolute;
    margin: auto;
    top: 50%;
    left: 50%;
    height: auto;
    transform: translate(-50%, -50%);
    @media (max-width: 700px) {
        width: 200%;  
        left: 0;
        top: 70%;
    }
`

class Cats extends Component{
    render(){
        return(
            <div>
                <Image src={this.props.image}/>
                <Position><TextDiv><i>{this.props.text1}</i></TextDiv></Position>
            </div>
        )
    }
}
export default Cats;