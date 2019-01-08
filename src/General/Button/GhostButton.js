/* @flow */

import React from 'react';
import { GhostBtn } from '../../Style/General/ButtonStyle';

const GhostButton = ({ children, ...defaultProps }: Props) => (
  <GhostBtn
    id="aries-ghostbtn"
    {...defaultProps}
  >
    {children}
  </GhostBtn>
);

type Props = {
  children: React$Node,
  className: string,
}

export default GhostButton;
