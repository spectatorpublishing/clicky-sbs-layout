import React, {Component} from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`
    background-color: #a5e8e7;
    height: 100vh;
`

const TextWrapper = styled.div`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    margin-left: 5%;
    z-index: 2;
`

const Highline = styled.span`
    line-height: 1.3;
    background-color: white;
    box-shadow: 0.25em 0 0 white,-0.25em 0 0 white;
    color: #004b92;
    font-style: italic;
    font-weight: 650;
    font-size: 6rem;
    @media (max-width: 700px) {
        font-size: 1.8rem;
    }
`

const Image = styled.img`
    position: absolute;
    top: 50%;
    transform: translate(-50%,-50%);
    left: 80%;
    width: 35%;
    z-index: 1;
    @media (max-width: 700px) {
        width: 70%; 
        left: 50%;
        top:70%;       
    }
`


class HighlightText3 extends Component {
    render() {
        return (
            <Wrapper>
                <TextWrapper>
                    <Highline>
                    {this.props.text1}
                    </Highline>
                    <br></br>
                    <Highline>
                    {this.props.text2}
                    </Highline>
                    <br></br>
                    <Highline>
                    {this.props.text3}
                    </Highline>
                </TextWrapper>
                <Image src={this.props.image}/>
            </Wrapper>
        );
    }
}

export default HighlightText3;