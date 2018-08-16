import React from 'react';

import { Body } from '../Style/JobCardStyle';

const JobCardBody = ({ children, ...defaultProps }:Props) => (
  <Body {...defaultProps}>
    {children}
  </Body>
);

type Props = {
  children: React$Node,
}

export default JobCardBody;
