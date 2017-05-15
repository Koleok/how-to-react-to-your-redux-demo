import React from 'react'
import { arrayOf, func, shape, string } from 'prop-types'
import { Row } from 'react-styled-flexboxgrid'
import { compose, lifecycle } from 'recompose'
import { connect } from 'react-redux'

import { fetchPoems, randomPoem } from './redux'
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

const App = ({ poems, generatedPoem, ...actions }) => (
  <AppContainer>
    <Header>
      <Logo>❤️</Logo>
      <h2>{"Mother's day Poetry Generator"}</h2>
    </Header>
    <Intro>
      A moving poem your mother will love
    </Intro>
    <Blockquote onClick={() => actions.randomPoem(createPoem(poems))}>
      {generatedPoem}
    </Blockquote>
    <Cite>-mbot</Cite>
    <h2>Credits</h2>
    <Row>
      {poems.map(Card)}
    </Row>
  </AppContainer>
)

App.propTypes = {
  poems: arrayOf(
    shape({
      author: string,
      title: string,
      lines: arrayOf(string),
    })
  ).isRequired,
  generatedPoem: string.isRequired,
  fetchPoems: func.isRequired,
  randomPoem: func.isRequired,
}

App.defaultProps = {
  poems: [],
  generatedPoem: '',
  fetchPoems: () => {},
  randomPoem: () => {},
}

// This is to let a test import the Component
// prior to being composed with the lifecycle
// call and redux wiring below
export const Component = App

const mapStateToProps = ({ poems, generatedPoem }) => ({
  poems,
  generatedPoem,
})

export default compose(
  connect(mapStateToProps, { fetchPoems, randomPoem }),
  lifecycle({
    componentDidMount() {
      this.props.fetchPoems('/title/mother')
    },
  })
)(App)
