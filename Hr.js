import React from 'react'
import {View} from 'react-native'
import PropTypes from 'prop-types'

import styled from 'styled-components'

const Row = styled.View `
  flexDirection: row;
`

const Side = styled.View `
  height: this.props.width;
  backgroundColor: ${props => props.color
  ? props.color
  : "white"};
  height: ${props => props.width
    ? props.width
    : 1}px;
  flex: 1;
  alignSelf: center;
`

export default class Hr extends React.Component {
  render() {
    return (
      <Row style={this.props.style}>
        <Side width={this.props.width} color={this.props.color}/>{this.props.children}
        <Side width={this.props.width} color={this.props.color}/>
      </Row>
    )
  }
}

Hr.propTypes = {
  width: PropTypes.number,
  color: PropTypes.string,
  // children: PropTypes.element.isRequired
}
