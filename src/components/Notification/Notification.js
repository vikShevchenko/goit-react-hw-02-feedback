import PropTypes from 'prop-types'
import React from 'react';

export default function Notification(props) {
  return (
    <p
      style={{
        height: '302.67px',
        paddingTop: '100px',
        boxSizing: 'border-box'
      }}
    >
      {props.mes}
    </p>
  );
}

Notification.propTypes = {
  mes: PropTypes.string.isRequired,
  
}