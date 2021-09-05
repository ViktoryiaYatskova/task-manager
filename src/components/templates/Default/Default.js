import React from 'react'
import PropTypes from 'prop-types'

const Default = ({ children }) => <div>{children}</div>

Default.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Default
