import React, {Component} from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    position: absolute;
    width: 100%;
    display: flex;
    height: 98%;
    @media (max-width: 700px) {
        display: block;
    }
`

const Left = styled.div`
    width: 52%;
    height: 100%;
    z-index: 5;
    @media (max-width: 700px) {
        width: 90vw;
        margin-left: 5vw;
        height: 50%;
    }
`

const Right = styled.div`
    width: 48%;
    height: 100%;
    z-index: 5;
    @media (max-width: 700px) {
        width: 90vw;
        margin-left: 5vw;
        height: 50%;
    }
`

const Image = styled.img`
    width: 90%;
    margin-left: 10%;
    display: block;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    @media (max-width: 700px) {
        width: 100%;
        margin: 0;
        top: 70%;
    }
`

const Text = styled.div`
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    @media (max-width: 700px) {
        width: 100%;
    }
`

const UpperText = styled.div`
    display: block;
    width: 100%;
    font-size: 14rem;
    height: 14rem;
    font-family: "Raleway";
    text-align: center;
    color: white;
    @media (max-width: 700px) {
        font-size: 4rem;
        height: 4rem;
    }
`

const LowerText = styled.div`
    margin-top: 5%;
    display: block;
    width: 100%;
    font-size: 8rem;
    height: 8rem;
    font-family: "Raleway";
    text-align: center;
    color: white;
    @media (max-width: 700px) {
        font-size: 2rem;
        height: 2rem;
    }
`

class PictureImage extends Component {
    render(){
        return(
            <Wrapper>
                <Left>
                    <Image src={this.props.image}/>
                </Left>
                <Right>
                    <Text>
                    <UpperText>{this.props.number}</UpperText>
                    <LowerText>{this.props.text}</LowerText>
                    </Text>
                </Right>
            </Wrapper>
        )
    }
}

export default PictureImage;