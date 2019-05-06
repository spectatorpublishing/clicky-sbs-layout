import React, { Component } from 'react';
import styled from 'styled-components';

const Position = styled.div`
    position: absolute;
    margin: auto;
    top: 50%;
    right: 0;
    bottom: 0;
    left: 50%;
    width: 65%;
    text-align:left;
    font-size: 3.5rem;
    transform: translate(-50%, -50%);
    @media (max-width: 700px) {
        font-size: 2rem;
        width: 90%;
    }
`

const TextDiv=styled.div`
    display:inline;
    color:#004D8C;
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
        top: 60%;
        width: 90%;        
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