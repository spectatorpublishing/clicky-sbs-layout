import React, {Component} from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`
    background-color: #a5e8e7;
    height: 100vh;
`

const TextWrapper = styled.div`
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    margin-left: 15%;
    @media (max-width: 900px) {
        top:50%;
        margin-left: 5%;
    }
`

const Highline1 = styled.div`
    color: #eff9f9;
    font-style: italic;
    font-size: 2rem;
    height: 6rem;
    width: 80%;
    @media (max-width: 900px) {
        height: 5rem;
        font-size: 1.2rem;
        width: 90%;
    }
`

const Highline2 = styled.div`
    color: #cceeee;
    font-style: italic;
    font-size: 3rem;
    height: 15rem;
    width: 80%;
    @media (max-width: 900px) {
        height: 11rem;
        font-size: 1.7rem;
        width: 90%;
    }
`

const Highline3 = styled.div`
    color: #99ddde;
    font-style: italic;
    font-size: 4rem;
    height: 16rem;
    width: 80%;
    @media (max-width: 900px) {
        height: 12rem;
        font-size: 2.2rem;
        width: 90%;
    }
`

class HighlightText extends Component {
    render() {
        return (
            <Wrapper>
                <TextWrapper>
                    <Highline1>
                    {this.props.text1}
                    </Highline1>
                    <br></br>
                    <Highline2>
                    {this.props.text2}
                    </Highline2>
                    <br></br>
                    <Highline3>
                    {this.props.text3}
                    </Highline3>
                </TextWrapper>
            </Wrapper>
        );
    }
}

export default HighlightText;