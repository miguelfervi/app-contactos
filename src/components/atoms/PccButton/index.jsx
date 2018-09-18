import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { getColorButton } from '../../style/index';


const PccButtonStyled = styled.button`
  background-color: ${props => getColorButton(props)};
`;

const PccButton = ({ onClick, copy, ...props }) => (
  <PccButtonStyled onClick={onClick} {...props}>{copy}</PccButtonStyled>
);

PccButton.defaultProps = {
  copy: '',
  isPrimary: true,
  onClick: () => null,
  theme: {},
};

PccButton.propTypes = {
  copy: PropTypes.string,
  isPrimary: PropTypes.bool,
  onClick: PropTypes.func,
  theme: PropTypes.shape({ button: PropTypes.object }),
};

export default PccButton;
