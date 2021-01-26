import styled, { keyframes } from 'styled-components';
import { Greyscale, SecondaryColor } from '../../Utils/Colors';

const animateCollapsible = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 10%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

export const CollapsibleContent = styled.div`
  position: relative;
  outline: none;
`;

export const CollapsibleContainer = styled.div`
  cursor: pointer;
  color: black;
  background-color: ${Greyscale.white};
  border: solid 1px ${Greyscale.lightgrey};
  font-size: 1em;

  &:focus {
    outline: none;
  }

  &:focus > ${CollapsibleContent} {
    outline: 5px auto -webkit-focus-ring-color;
  }
`;

export const CollapsibleHeader = styled.div<{ isOpen: boolean }>`
  background: ${Greyscale.white};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2em;

  &:hover {
    color: ${SecondaryColor.actionblue};
  }

  svg {
    transform: rotate(0);
    transition: transform 0.5s;
    ${({ isOpen }) => {
      if (isOpen) {
        return `
        transform: rotate(180deg);
        transition: transform .5s;
      `;
      }
    }}
  }
`;

export const CollapsibleBody = styled.div`
  padding: 0 1.2em 1.2em 1.2em;
  margin-bottom: 0;
  animation: ${animateCollapsible} 0.3s linear;
  cursor: default;
`;
