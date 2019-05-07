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
    font-size: 2rem;
    overflow: hidden;
    @media (max-width: 700px) {
        font-size: 1.6rem;
        width: 90%;
    }
`
const Larger = styled.a`
    font-size: 3rem;
    color: #99DDDE;
    text-decoration: none;
    z-index: 20;
    @media (max-width: 700px) {
        line-height: 1.6rem;
        font-size: 1.6rem;
    }
    &:hover{
        color: #99DDDE;
    }
    &:visited{
        color: #99DDDE;
    }
`
const TextDiv=styled.div`
    color:white;
    width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
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

class End2 extends Component{
    render(){
        return(
            <div>
                <Image src={this.props.image}/>
                <Position>
                    <TextDiv><i>{this.props.text1}</i></TextDiv>
                    <TextDiv><i><Larger href="www.manhattanministorage.com/students">www.manhattanministorage.com/students</Larger></i></TextDiv>
                    <TextDiv><i>{this.props.text2}</i></TextDiv>
                </Position>
            </div>
        )
    }
}
export default End2;