import React from 'react';
import PropTypes from 'prop-types';

function OrderedListOption(props) {
  const { value } = props;
  return <li className="value">{value}</li>;
}

OrderedListOption.propTypes = {
  value: PropTypes.string,
};

export default OrderedListOption;