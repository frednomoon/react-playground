import React from 'react'
import ReactDOM from 'react-dom'

import styled from 'styled-components'

import Loader from './Loader'

const Box = styled.div`
  height: 500px;
  width: 400px;
  position: relative;
  background: grey;
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
