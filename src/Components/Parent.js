import React, {Component} from 'react';
import styled from 'styled-components';
import Slide from './Slide.js';
import Bar from './Bar.js';

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
        this.maxSlides = 15;
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
        if(e.keyCode == 39) {
            console.log("right arrow");
            this.nextSlide();
        }
        else if(e.keyCode == 40) {
            this.prevSlide();
        }
    }

    render() {
        return(
            <Total onKeyDown={this.handleKey} >
            <Wrapper>
                <Left onClick={this.prevSlide} >
                    {this.state.slideCounter}
                </Left>

                <Right onClick={this.nextSlide} >
                    {this.state.slideCounter}
                </Right>
            </Wrapper>
            <Bar width={this.state.slideCounter*10}/>
            </Total>
        );
    }
}

export default Parent;
