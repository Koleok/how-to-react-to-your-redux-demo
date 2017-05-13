import React from 'react'
import { arrayOf, shape, string } from 'prop-types'
import { Row } from 'react-styled-flexboxgrid'
import { compose, lifecycle } from 'recompose'
import { connect } from 'react-redux'

import { fetchPoems } from './redux'
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

const App = ({ poems, generatedPoem }) => (
  <AppContainer>
    <Header>
      <Logo>❤️</Logo>
      <h2>{"Mother's day Poetry Generator"}</h2>
    </Header>
    <Intro>
      A moving poem your mother will love
    </Intro>
    <Blockquote>
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
  ),
  generatedPoem: string,
}

App.defaultProps = {
  poems: '',
  generatedPoem: '',
}

const mapStateToProps = ({ poems }) => ({
  poems,
  generatedPoem: createPoem(poems),
})

export default compose(
  connect(mapStateToProps, { fetchPoems }),
  lifecycle({
    componentDidMount() {
      this.props.fetchPoems('/title/mother')
    },
  })
)(App)
