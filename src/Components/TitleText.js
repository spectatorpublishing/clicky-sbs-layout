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
    width: 60%;
    height: 100%;
    z-index: 5;
    @media (max-width: 700px) {
        width: 90vw;
        margin-left: 5vw;
        height: 50%;
    }
`

const Right = styled.div`
    width: 40%;
    height: 100%;
    z-index: 5;
    @media (max-width: 700px) {
        width: 90vw;
        margin-left: 5vw;
        height: 50%;
    }
`

const Image = styled.img`
    width: 80%;
    margin-left: 10%;
    display: block;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    @media (max-width: 700px) {
        width: 100%;
        margin: 0;
        top: 40%;
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
    font-size: 8rem;
    font-family: "Raleway";
    text-align: center;
    color: #004D8C;
    @media (max-width: 700px) {
        font-size: 3.3rem;
    }
`

class TitleText extends Component {
    render(){
        return(
            <Wrapper>
                <Left>
                    <Text>
                    <UpperText>{this.props.title}<sup>3</sup>?</UpperText>
                    </Text>
                </Left>
                <Right>
                    <Image src={this.props.image}/>
                </Right>
            </Wrapper>
        )
    }
}

export default TitleText;