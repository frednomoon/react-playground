import React from 'react'
import ReactDOM from 'react-dom'

import styled from 'styled-components'

import Tree from './Tree'

const Box = styled.div`
  position: relative;
  background: rgba(0,0,0,0.1);
`

const App = _ => (
  <Box>
    <Tree />
  </Box>
)

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
