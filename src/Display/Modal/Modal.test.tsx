import * as React from 'react';

import * as renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';

import Modal, { sizeType, Props } from './Modal';
import { SIZES } from './ModalStyle';

const props = {
  title: 'Modal Title',
  content: 'Modal Content',
  footer: 'Modal Footer',
  onClose: jest.fn(),
};

const OpenedModal = (
  <Modal
    title={props.title}
    isVisible={true}
    footer={[<button key="button">{props.footer}</button>]}
    onClose={props.onClose}
  >
    <p>{props.content}</p>
  </Modal>
);

type TestProps = Omit<Props, 'onClose' | 'isVisible'> & {
  onClose?: () => void;
  isVisible?: boolean;
};

function setupModal(isVisible: boolean, customProps: TestProps = {}) {
  const onClose = jest.fn();
  const ModalComponent = (
    <Modal
      title={props.title}
      isVisible={isVisible}
      footer={[<button key="button">{props.footer}</button>]}
      onClose={onClose}
      {...customProps}
    >
      <p>{props.content}</p>
    </Modal>
  );
  const { getByTestId, getByRole } = render(ModalComponent);

  return {
    modalContainer: getByTestId('modal-container') as Element,
    modalDialog: getByRole('dialog') as Element,
    closeButton: getByTestId('close-button') as Element,
    onClose,
  };
}

it('<Modal> should render with a title, content, footer and an onClick handler', () => {
  const ModalSnapshot = renderer.create(OpenedModal).toJSON();
  expect(ModalSnapshot).toMatchSnapshot();
});

describe('when modal is opened', () => {
  it('should be visible', () => {
    const { modalContainer } = setupModal(true);
    expect(modalContainer).toHaveStyle('visibility: visible');
  });

  it('should not be closed if the modal is clicked', () => {
    const { modalDialog, onClose } = setupModal(true);
    fireEvent.click(modalDialog);
    expect(onClose).toHaveBeenCalledTimes(0);
  });

  it('should display the title', () => {
    const { getByText } = render(OpenedModal);
    const modalHeader = getByText(props.title);
    expect(modalHeader).toHaveTextContent(props.title);
  });

  it('should display the content', () => {
    const { getByText } = render(OpenedModal);
    const modalContent = getByText(props.content);
    expect(modalContent).toHaveTextContent(props.content);
  });

  it('should display the footer', () => {
    const { getByText } = render(OpenedModal);
    const modalFooter = getByText(props.footer);
    expect(modalFooter).toHaveTextContent(props.footer);
  });
});

describe('when modal is closed', () => {
  it('should not be visible', () => {
    const { modalContainer } = setupModal(false);
    expect(modalContainer).toHaveStyle('visibility: hidden');
  });

  it('children should not be mounted', () => {
    const { queryByTestId } = render(
      <Modal isVisible={false} onClose={props.onClose}>
        <p data-testid="modal-children">{props.content}</p>
      </Modal>
    );
    const children = queryByTestId('modal-children');
    expect(children).not.toBeInTheDocument();
  });
});

const escapeEvent = {
  key: 'Escape',
  keyCode: 27,
};

describe('onClose should be called once when:', () => {
  it('close icon is clicked', () => {
    const { closeButton, onClose } = setupModal(true);
    fireEvent.click(closeButton);
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('area outside modal is clicked', () => {
    const { modalContainer, onClose } = setupModal(true);
    // mousedown needs to be fired because
    // handleClick checks if the mousedown target element
    // is the modal container before calling onClose
    fireEvent.mouseDown(modalContainer);
    fireEvent.click(modalContainer);
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('escape key is pressed', () => {
    const { modalContainer, onClose } = setupModal(true);
    fireEvent.keyDown(modalContainer, escapeEvent);
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});

describe('onClose should not have been called when:', () => {
  it('escape key is pressed on closed modal', () => {
    const { modalContainer, onClose } = setupModal(false);
    fireEvent.keyDown(modalContainer, escapeEvent);
    expect(onClose).toHaveBeenCalledTimes(0);
  });

  it('onClose is not a function', () => {
    const { closeButton, onClose } = setupModal(false, {
      onClose: null,
    });
    fireEvent.click(closeButton);
    expect(onClose).toHaveBeenCalledTimes(0);
  });

  it('modal-dialog is clicked', () => {
    const { onClose } = setupModal(false);
    fireEvent.click(document.getElementsByClassName('modal-dialog')[0]);
    expect(onClose).toHaveBeenCalledTimes(0);
  });
});

describe('displays the correct size', () => {
  const sizes = Object.keys(SIZES) as sizeType[];
  sizes.forEach(size => {
    const width = SIZES[size];

    it(`${size}: ${width}`, () => {
      const { getByTestId } = render(
        <Modal size={size} isVisible={true} onClose={props.onClose}>
          <p>{props.content}</p>
        </Modal>
      );
      const modalDialog = getByTestId('dialog');
      expect(modalDialog).toHaveStyle(`width: ${width}px;`);
    });
  });
});

it('should not show the header when hideHeader is true', () => {
  const { getByTestId } = render(
    <Modal
      hideHeader
      title={props.title}
      isVisible={true}
      onClose={props.onClose}
    >
      <p>{props.content}</p>
    </Modal>
  );
  const modalContainer = getByTestId('modal-container');
  expect(modalContainer).not.toHaveTextContent(props.title);
});

it('should center the Modal vertically when centering is true', () => {
  const { getByTestId } = render(
    <Modal centering isVisible={true} onClose={props.onClose}>
      <p>{props.content}</p>
    </Modal>
  );
  const modalContainer = getByTestId('modal-container');
  expect(modalContainer).toHaveStyle('align-items: center;');
});

describe('<Modal /> not receiving prop onClose', () => {
  test('click on close button should not close the modal', () => {
    const { getByTestId } = render(
      <Modal isVisible={true}>
        <p>content</p>
      </Modal>
    );
    const modalContainer = getByTestId('modal-container');
    const closeButton = getByTestId('close-button');
    fireEvent.click(closeButton);
    expect(modalContainer).toHaveStyle('visibility: visible');
  });
  test('click outside should not close the modal', () => {
    const { queryByTestId, queryByText } = render(
      <React.Fragment>
        <Modal isVisible={true}>
          <p>content</p>
        </Modal>
        <div>outside</div>
      </React.Fragment>
    );
    const modalContainer = queryByTestId('modal-container');
    const outside = queryByText('outside');
    fireEvent.click(outside);
    expect(modalContainer).toHaveStyle('visibility: visible');
  });
});
