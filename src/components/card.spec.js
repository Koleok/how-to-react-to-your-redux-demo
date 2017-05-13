import React from 'react'
import Card from './card'
import { toTree } from '../test.utils'

it('should handle a poem object', () => {
  expect(toTree(<Card author="me" title="the poem lives" />)).toMatchSnapshot()
})
