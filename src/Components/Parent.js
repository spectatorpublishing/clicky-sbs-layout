import React, {Component} from 'react';
import styled from 'styled-components';
import Bar from './Bar.js';
import PictureImage from './PictureImage';
import TitleText from './TitleText';
import TextPage1 from './TextPage1';
import TextPage2 from './TextPage2';

const Slides= [
    {
        element: <TitleText image="https://s3.amazonaws.com/spec-imagehosting/mm/SQUAAAA.png" title="What could you fit in 64 ft"/>,
        color: "linear-gradient(#99DDDE,#FFFFFF)"
    },
    {
        element: <TextPage1 image="https://s3.amazonaws.com/spec-imagehosting/mm/floornowalls.png" text1="Four by four by four..."/>,
        color: "linear-gradient(#99DDDE,#FFFFFF)"
    },
    {
        element: <TextPage1 image="https://s3.amazonaws.com/spec-imagehosting/mm/empty+room.png" text1="Four by four by four..." text2="64 cubic feet..."/>,
        color: "linear-gradient(#99DDDE,#FFFFFF)"
    },
    {
        element: <TextPage2 text1="So why do we bring up 64 cubic feet?"/>,
        color: "linear-gradient(#004D8C,#004D8C)"
    },
    {
        element: <TextPage2 text1="So why do we bring up 64 cubic feet?" text2="Seems random, huh?"/>,
        color: "linear-gradient(#004D8C,#004D8C)"
    },
    {
        element: <PictureImage image="https://s3.amazonaws.com/spec-imagehosting/mm/dice1.png" number="" text=""/>,
        color: "linear-gradient(#eff9f9,#eff9f9)"
    },
    {
        element: <PictureImage image="https://s3.amazonaws.com/spec-imagehosting/mm/dice2.png" number="115,989" text=""/>,
        color: "linear-gradient(#cceeee,#cceeee)"
    },
    {
        element: <PictureImage image="https://s3.amazonaws.com/spec-imagehosting/mm/dice3.png" number="115,989" text="dice"/>,
        color: "linear-gradient(#99DDDE,#99ddde)"
    }
]

const Total = styled.div`
    top:0;
    left:0;
    bottom:0;
    right:0;
    height:100%;
    width:100%;
`

const Wrapper = styled.div`
    position: absolute;
    width: 100%;
    display: flex;
    height: 98%;
    background-image: ${props => props.color};
`

const Left = styled.div`
    width: 50%;
    height: 100%;
    z-index: 10;
`
const Right = styled.div`
    width: 50%;
    height: 100%;
    z-index: 10;
`

class Parent extends Component {

    constructor(props){
        super(props);
        this.state = {slideCounter: 0};
        this.nextSlide = this.nextSlide.bind(this);
        this.prevSlide = this.prevSlide.bind(this);
        this.handleKey = this.handleKey.bind(this);
        this.maxSlides = 34;
    }

    nextSlide = () => {
        if(this.state.slideCounter < this.maxSlides) {
            this.setState({slideCounter: this.state.slideCounter + 1});
            console.log(this.state.slideCounter);
        }
    }

    prevSlide = () => {
        if(this.state.slideCounter > 0) {
            this.setState({slideCounter: this.state.slideCounter - 1});
            console.log(this.state.slideCounter);
        }
    }

    handleKey(e) {
        if(e.keyCode === 39) {
            console.log("right arrow");
            this.nextSlide();
        }
        else if(e.keyCode === 40) {
            this.prevSlide();
        }
    }

    render() {
        return(
            <Total onKeyDown={this.handleKey} >
            <Wrapper color={Slides[this.state.slideCounter].color}>
                <Left onClick={this.prevSlide}/>
                <Right onClick={this.nextSlide}/>
            </Wrapper>
            {Slides[this.state.slideCounter].element}
            <Bar width={this.state.slideCounter*(100/34)}/>
            </Total>
        );
    }
}

export default Parent;
