import React from 'react';
import Parent from './Components/Parent.js'
import styled from 'styled-components';

const Main = styled.div`
@import url('https://fonts.googleapis.com/css?family=Raleway:700,700i');
font-family: Raleway, sans-serif;
`

function App() {
  return (
    <Main>
      <Parent/>
    </Main>
  );
}

export default App;
