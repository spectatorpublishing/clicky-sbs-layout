import React, {Component} from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
`
const Left = styled.div`
    width: 50%;
`
const Right = styled.div`
    width: 50%;
`


class Slide extends Component {

    render() {
        return(
            <Wrapper>
                <Left onClick={this.nextSlide} >

                </Left>

                <Right>

                </Right>

            </Wrapper>
        );
    }
}

export default Slide;
