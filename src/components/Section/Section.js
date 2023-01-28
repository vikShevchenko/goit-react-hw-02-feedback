import PropTypes from 'prop-types'
import React, { Component } from 'react'
import './Section.styled.css'

export default class Section extends Component {
  render() {
    return (
      <div className='section'>
        <h4>{this.props.title}</h4>
         {this.props.children} 
      </div>
    )
  }
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}
