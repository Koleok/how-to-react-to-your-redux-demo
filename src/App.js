import React, { Component } from 'react'
import { string } from 'prop-types'
import { Row } from 'react-styled-flexboxgrid'

import { getPoems } from './api'
import { createPoem } from './utils'

import {
  AppContainer,
  Blockquote,
  Card,
  Cite,
  Header,
  Intro,
  Logo,
} from './components'

class App extends Component {
  static propTypes = { poem: string }

  state = { generatedPoem: '', poems: [] }

  componentDidMount() {
    getPoems('/title/mother')
      .map(poems => ({ poems, generatedPoem: createPoem(poems) }))
      .fork(console.error, this.setState.bind(this))
  }

  render() {
    return (
      <AppContainer>
        <Header>
          <Logo>❤️</Logo>
          <h2>{"Mother's day Poetry Generator"}</h2>
        </Header>
        <Intro>
          A moving poem your mother will love
        </Intro>
        <Blockquote>
          {this.state.generatedPoem}
        </Blockquote>
        <Cite>-mbot</Cite>
        <h2>Credits</h2>
        <Row>
          {this.state.poems.map(Card)}
        </Row>
      </AppContainer>
    )
  }
}

export default App
