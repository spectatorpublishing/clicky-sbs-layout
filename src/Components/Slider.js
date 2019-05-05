import React, {Component} from 'react';
import styled from 'styled-components';


class Slider extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
          images: [
            "image1"
          ],
          currentIndex: 0
        }
    }

    goToNextSlide = () => {
        this.setState(prevState => ({
          currentIndex: prevState.currentIndex + 1
        }));
    }

    render() {
        return(
            <div>
                <Slide />

                <LeftArrow
                goToPrevSlide={this.goToPrevSlide}
                />

                <RightArrow
                goToNextSlide={this.goToNextSlide}
                />

            </div>
        );
    }
}

export default Slider;
