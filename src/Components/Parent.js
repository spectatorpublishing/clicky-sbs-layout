import React, {Component} from 'react';
import styled from 'styled-components';
import Bar from './Bar.js';
import PictureImage from './PictureImage';
import TitleText from './TitleText';
import TextPage1 from './TextPage1';
import TextPage2 from './TextPage2';
import TextPage3 from './TextPage3';
import HighlightText from './HighlightText';
import HighlightText2 from './HighlightText2';
import HighlightText3 from './HighlightText3';
import Cats1 from './Cats1';
import Cats2 from './Cats2';
import End1 from './End1';
import End2 from './End2';

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
        element: <HighlightText text1="It's because" text2="Manhattan Mini Storage" text3="offers all kinds of units"/>,
        color: "linear-gradient(#99DDDE,#FFFFFF)"
    },
    {
        element: <HighlightText2 text1="from closet size units" text2="to extra large rooms"/>,
        color: "linear-gradient(#99DDDE,#FFFFFF)"
    },
    {
        element: <HighlightText3 image="https://s3.amazonaws.com/spec-imagehosting/mm/empty+room.png" text1="but 64 cubic feet is the" text2="smallest unit you can" text3="rent with them"/>,
        color: "linear-gradient(#99DDDE,#FFFFFF)"
    },
    {
        element: <TextPage3 text1="64 cubic feet might not sound like much,"/>,
        color: "linear-gradient(#99DDDE,#99DDDE)"
    },
    {
        element: <TextPage3 text1="64 cubic feet might not sound like much," text2="but you’d really be surprised about the magnitudes that such a small space can contain..."/>,
        color: "linear-gradient(#99DDDE,#99DDDE)"
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
    },
    {
        element: <PictureImage image="https://s3.amazonaws.com/spec-imagehosting/mm/cupcakes1.png" number="" text=""/>,
        color: "linear-gradient(#eff9f9,#eff9f9)"
    },
    {
        element: <PictureImage image="https://s3.amazonaws.com/spec-imagehosting/mm/cupcake2.png" number="14,349" text=""/>,
        color: "linear-gradient(#cceeee,#cceeee)"
    },
    {
        element: <PictureImage image="https://s3.amazonaws.com/spec-imagehosting/mm/cupcake3.png" number="14,349" text="cupcakes"/>,
        color: "linear-gradient(#99DDDE,#99ddde)"
    },
    {
        element: <PictureImage image="https://s3.amazonaws.com/spec-imagehosting/mm/cats1.png" number="" text=""/>,
        color: "linear-gradient(#eff9f9,#eff9f9)"
    },
    {
        element: <PictureImage image="https://s3.amazonaws.com/spec-imagehosting/mm/cats2.png" number="170" text=""/>,
        color: "linear-gradient(#cceeee,#cceeee)"
    },
    {
        element: <PictureImage image="https://s3.amazonaws.com/spec-imagehosting/mm/cats3.png" number="170" text="adult cats"/>,
        color: "linear-gradient(#99DDDE,#99ddde)"
    },
    {
        element: <PictureImage image="https://s3.amazonaws.com/spec-imagehosting/mm/egg1.png" number="" text=""/>,
        color: "linear-gradient(#eff9f9,#eff9f9)"
    },
    {
        element: <PictureImage image="https://s3.amazonaws.com/spec-imagehosting/mm/egg2.png" number="21,134" text=""/>,
        color: "linear-gradient(#cceeee,#cceeee)"
    },
    {
        element: <PictureImage image="https://s3.amazonaws.com/spec-imagehosting/mm/egg3.png" number="21,134" text="chicken eggs"/>,
        color: "linear-gradient(#99DDDE,#99ddde)"
    },
    {
        element: <PictureImage image="https://s3.amazonaws.com/spec-imagehosting/mm/laptop1.png" number="" text=""/>,
        color: "linear-gradient(#eff9f9,#eff9f9)"
    },
    {
        element: <PictureImage image="https://s3.amazonaws.com/spec-imagehosting/mm/laptop2.png" number="1,018" text=""/>,
        color: "linear-gradient(#cceeee,#cceeee)"
    },
    {
        element: <PictureImage image="https://s3.amazonaws.com/spec-imagehosting/mm/laptop3.png" number="1,018" text="laptops"/>,
        color: "linear-gradient(#99DDDE,#99ddde)"
    },
    {
        element: <PictureImage image="https://s3.amazonaws.com/spec-imagehosting/mm/lightbulb1.png" number="" text=""/>,
        color: "linear-gradient(#eff9f9,#eff9f9)"
    },
    {
        element: <PictureImage image="https://s3.amazonaws.com/spec-imagehosting/mm/lightbulb2.png" number="15,320" text=""/>,
        color: "linear-gradient(#cceeee,#cceeee)"
    },
    {
        element: <PictureImage image="https://s3.amazonaws.com/spec-imagehosting/mm/lightbulb3.png" number="15,320" text="lightbulbs"/>,
        color: "linear-gradient(#99DDDE,#99ddde)"
    },
    {
        element: <Cats1 image="https://s3.amazonaws.com/spec-imagehosting/mm/morecats.png" text1="But even if you’ve got more than 170 adult cats on your hands and might need more than 64 cubic feet, Manhattan Mini Storage has got you covered with loads of space and units at all sizes."/>,
        color: "linear-gradient(#99DDDE,#99ddde)"
    },
    {
        element: <Cats2 text1="They’ve even got a storage calculator where you can tally up how much space your stuff will take up, and then find out how much storage is right for you!"/>,
        color: "linear-gradient(#99DDDE,#FFFFFF)"
    },
    {
        element: <End1 text1="This year, Manhattan Mini Storage is offering two deals for students:"/>,
        color: "linear-gradient(#004D8C,#004D8C)"
    },
    {
        element: <End1 text1="This year, Manhattan Mini Storage is offering two deals for students:" text2="One deal is that they’ll pick up and drop off your stuff, and charge you flat total rate for the whole summer."/>,
        color: "linear-gradient(#004D8C,#004D8C)"
    },
    {
        element: <End1 text1="This year, Manhattan Mini Storage is offering two deals for students:" text2="One deal is that they’ll pick up and drop off your stuff, and charge you flat total rate for the whole summer." text3="Their other summer student deal is 15% off of self storage."/>,
        color: "linear-gradient(#004D8C,#004D8C)"
    },
    {
        element: <End2 text1="Check out their website" text2="to find out more!"/>,
        color: "linear-gradient(#004D8C,#004D8C)"
    }
]

const Total = styled.div`
    top:0;
    left:0;
    bottom:0;
    right:0;
    height:100%;
    width:100%;
    overflow-x: hidden !important;
    overflow-y: hidden !important;
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
        this.maxSlides = 33;
        this.preloaded = []
        this.preload = this.preload.bind(this)
    }

    componentDidMount() {
        this.preload(0)
    }

    preload(i){
        let images = [
            "https://s3.amazonaws.com/spec-imagehosting/mm/SQUAAAA.png",
            "https://s3.amazonaws.com/spec-imagehosting/mm/floornowalls.png",
            "https://s3.amazonaws.com/spec-imagehosting/mm/empty+room.png",
            "https://s3.amazonaws.com/spec-imagehosting/mm/empty+room.png",
            "https://s3.amazonaws.com/spec-imagehosting/mm/dice1.png",
            "https://s3.amazonaws.com/spec-imagehosting/mm/dice2.png",
            "https://s3.amazonaws.com/spec-imagehosting/mm/dice3.png",
            "https://s3.amazonaws.com/spec-imagehosting/mm/cupcakes1.png",
            "https://s3.amazonaws.com/spec-imagehosting/mm/cupcake2.png",
            "https://s3.amazonaws.com/spec-imagehosting/mm/cupcake3.png",
            "https://s3.amazonaws.com/spec-imagehosting/mm/cats1.png",
            "https://s3.amazonaws.com/spec-imagehosting/mm/cats2.png",
            "https://s3.amazonaws.com/spec-imagehosting/mm/cats3.png",
            "https://s3.amazonaws.com/spec-imagehosting/mm/egg1.png",
            "https://s3.amazonaws.com/spec-imagehosting/mm/egg2.png",
            "https://s3.amazonaws.com/spec-imagehosting/mm/egg3.png",
            "https://s3.amazonaws.com/spec-imagehosting/mm/laptop1.png",
            "https://s3.amazonaws.com/spec-imagehosting/mm/laptop2.png",
            "https://s3.amazonaws.com/spec-imagehosting/mm/laptop3.png",
            "https://s3.amazonaws.com/spec-imagehosting/mm/lightbulb1.png",
            "https://s3.amazonaws.com/spec-imagehosting/mm/lightbulb2.png",
            "https://s3.amazonaws.com/spec-imagehosting/mm/lightbulb3.png",
            "https://s3.amazonaws.com/spec-imagehosting/mm/morecats.png"
        ]
        let img = new Image()
        img.onload = () => {
          if (i + 1 < images.length) this.preload(i + 1)
        }
        img.src = images[i]
        this.preloaded.push(img)
    }

    nextSlide = () => {
        if(this.state.slideCounter < this.maxSlides) {
            this.setState({slideCounter: this.state.slideCounter + 1});
        }
    }

    prevSlide = () => {
        if(this.state.slideCounter > 0) {
            this.setState({slideCounter: this.state.slideCounter - 1});
        }
    }

    handleKey(e) {
        if(e.key === "ArrowRight") {
            this.nextSlide();
        }
        else if(e.key === "ArrowLeft") {
            this.prevSlide();
        }
    }

    render() {
        return(
            <Total onKeyDown={this.handleKey} tabIndex="0">
            <Wrapper color={Slides[this.state.slideCounter].color}>
                <Left onClick={this.prevSlide}/>
                <Right onClick={this.nextSlide}/>
            </Wrapper>
            {Slides[this.state.slideCounter].element}
            <Bar width={this.state.slideCounter*(100/this.maxSlides)}/>
            </Total>
        );
    }
}

export default Parent;
