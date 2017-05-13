import React from 'react'
import ReactDOM from 'react-dom'
import { Component as App } from './app'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
})
