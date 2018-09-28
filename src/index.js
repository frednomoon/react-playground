import React from 'react'
import ReactDOM from 'react-dom'

import styled from 'styled-components'

import Loader from './Loader'

const Box = styled.div`
  height: 500px;
  width: 400px;
  position: relative;
  background: rgba(0,0,0,0.1);
`

const App = _ => (
  <Box>
    <Loader />
  </Box>
)

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
