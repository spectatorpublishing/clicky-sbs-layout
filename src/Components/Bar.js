import React, { Component } from 'react';
import styled from 'styled-components';

const BackBar=styled.div`
    background-color: grey;
    vertical-align: bottom;
    height:1.5vh;
    width:100%;
    position:fixed;
    bottom:0
`
const ProgressBar=styled.div`
    background-color: yellow;
    vertical-align: bottom;
    height:1.5vh;
    width:${props => props.width}vw;
    position:fixed;
    bottom:0;
    $(pro)
`

const Div=styled.div`
    position: relative;
    height:100vh;
`


class Bar extends Component{

    render(){
        return(
            <Div>
            <BackBar/><ProgressBar width={this.props.width}/>
            </Div>
        );
    }

}

export default Bar;