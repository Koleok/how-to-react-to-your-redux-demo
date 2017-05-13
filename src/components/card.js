import React from 'react'
import styled from 'styled-components'
import { string } from 'prop-types'
import { Col } from 'react-styled-flexboxgrid'

const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  :hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
`

const CardContent = styled.div`
  padding: 2px 16px;
`

const Component = ({ title, author }) => (
  <Col xs={6} md={3}>
    <Card key={title}>
      <CardContent>
        <h4><b>{author}</b></h4>
        <p>{title}</p>
      </CardContent>
    </Card>
  </Col>
)

Component.propTypes = {
  title: string,
  author: string,
}

export default Component
