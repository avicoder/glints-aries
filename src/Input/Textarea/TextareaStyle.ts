import styled from 'styled-components';
import { Greyscale, PrimaryColor, SecondaryColor } from '../../Utils/Colors';

export const TextareaContainer = styled.div`
  flex-grow: 1;
  position: relative;
  display: flex;
`;

export const TextareaLabel = styled.label<TextareaLabelProps>`
  position: absolute;
  left: 22px;
  top: 1em;
  background: ${Greyscale.white};
  color: ${({ floating }) =>
    floating ? `${Greyscale.black}` : `${Greyscale.grey}`};
  transition: all 0.2s;
  pointer-events: none;
  font-weight: 300;
  font-size: 1.1em;

  ${({ floating }) => {
    if (floating) {
      return `
        padding: 0 5px;
        transform: translate3d(-15px,-20px,0);
        transition: all .2s;
        font-size: 12px;
      `;
    }
  }}

  ${({ status, floating }) => {
    if (status === 'error' && floating) {
      return `
        color: ${PrimaryColor.glintsred};
      `;
    }
  }}
`;

interface TextareaLabelProps {
  floating: boolean;
  status?: string;
}

export const TextareaInput = styled.textarea<TextareaInputProps>`
  position: relative;
  width: 100%;
  outline: none;
  font-size: 1.1em;
  line-height: 1.5;
  padding: 15px 20px;
  border: ${({ status }) =>
    status === 'error'
      ? `2px solid ${PrimaryColor.glintsred}`
      : `2px solid ${Greyscale.grey}`};
  transition: border .5s;
  resize: vertical;
  overflow: auto;
  height: auto;

  ${({ status, floating }) => {
    if (status === 'error') {
      if (floating) {
        return `
          border: 2px solid ${PrimaryColor.glintsred};
        `;
      }
    }
  }}
    

  &:disabled {
    cursor: not-allowed;
    background: ${Greyscale.softgrey};

    + ${TextareaLabel} {
      background: transparent;
      color: ${Greyscale.grey};
    }

    &:hover {
      border: 2px solid ${Greyscale.lightgrey};
    }
  }

  &:hover {
    border: 2px solid ${SecondaryColor.actionblue};
    transition: border .5s;

    ${({ status }) => {
      if (status === 'error') {
        return `
          border: 2px solid ${PrimaryColor.glintsred};
        `;
      }
    }}

    + ${TextareaLabel} {
      color: ${Greyscale.black};

      ${({ status }) => {
        if (status === 'error') {
          return `
          color: ${PrimaryColor.glintsred};
        `;
        }
      }}
    }
  }

  &:focus {
    border: 2px solid ${SecondaryColor.actionblue};

    ${({ status }) => {
      if (status === 'error') {
        return `
          border: 2px solid ${PrimaryColor.glintsred};
        `;
      }
    }}

    + ${TextareaLabel} {
      padding: 0 5px;
      transform: translate3d(-15px,-20px,0);
      transition: all .2s;
      color: ${Greyscale.black};
      font-size: 12px;

      ${({ status }) => {
        if (status === 'error') {
          return `
          color: ${PrimaryColor.glintsred};
        `;
        }
      }}
    }
  }
`;

interface TextareaInputProps {
  floating?: boolean;
  status?: string;
}
