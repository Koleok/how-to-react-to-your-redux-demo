import React from 'react'
import styled from 'styled-components'
import logo from './logo.svg'

const Container = styled.div`
  text-align: center;
`

const Logo = styled.img`
  animation: App-logo-spin infinite 20s linear;
  height: 80px;
`

const Header = styled.div`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`

const Intro = styled.p`
  font-size: large;
`

const App = () => (
  <Container className="App">
    <Header className="App-header">
      <Logo src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to React</h2>
    </Header>
    <Intro className="App-intro">
      To get started, edit <code>src/App.js</code> and save to reload.
    </Intro>
  </Container>
)

export default App
