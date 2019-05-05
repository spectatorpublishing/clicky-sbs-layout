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
    margin-left: 10%;
`

const Highline = styled.span`
    line-height: 1.3;
    background-color: white;
    box-shadow: 0.25em 0 0 white,-0.25em 0 0 white;
    color: #004b92;
    font-style: italic;
    font-weight: 650;
    font-size: 6rem;
`

class HighlightText extends Component {
    render() {
        return (
            <Wrapper>
                <TextWrapper>
                    <Highline>
                    It’s because
                    </Highline>
                    <br></br>


                    <Highline>
                    Manhattan Mini Storage
                    </Highline>

                    <br></br>

                    <Highline>
                        offers all kinds of units
                    </Highline>
                </TextWrapper>
            </Wrapper>
        );
    }
}

export default HighlightText;