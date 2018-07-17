/* @flow */

import React from 'react';
import { LinkBtn } from '../Style/ButtonStyle';
import Label from '../Label';

const LinkButton = ({ children, ...defaultButtonProps }: Props) => (
  <LinkBtn>
    <Label {...defaultButtonProps}>
      {children}
    </Label>
  </LinkBtn>
);

type Props = {
  theme: string,
  onClick: Function,
  children: React$Node,
  className: string,
}

export default LinkButton;
