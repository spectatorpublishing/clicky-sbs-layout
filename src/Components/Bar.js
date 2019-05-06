import React, { Component } from 'react';
import styled from 'styled-components';

const BackBar=styled.div`
    background-color: #0D2742;
    vertical-align: bottom;
    height:2%;
    width:100%;
    position:fixed;
    bottom:0
`
const ProgressBar=styled.div`
    background-color: #44A7F8;
    vertical-align: bottom;
    height:2%;
    width:${props => props.width}vw;
    position:fixed;
    bottom:0;
    $(pro)
`

const Div=styled.div`
    position: absolute;
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