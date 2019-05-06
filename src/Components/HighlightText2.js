import React, {Component} from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`
    background-color: #a5e8e7;
    height: 100vh;
    width: 100%;
`

const TextWrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 80%;
    transform: translate(-50%,-50%);
    text-align: center;
    @media (max-width: 700px) {
        width: 90%;
    }
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
        font-size: 2rem;
    }
`

class HighlightText2 extends Component {
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
                </TextWrapper>
            </Wrapper>
        );
    }
}

export default HighlightText2;