import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TextInput from './TextInput';

describe('Test examples', () => {
  test('Addition', () => {
    expect(2 + 2).toEqual(4);
  });

  it('should subtract successfully', () => {
    expect(5 - 3).toEqual(2);
  });
});

describe('TextInput tests', () => {
  let label: string, id: string, handler: jest.Mock;

  beforeEach(() => {
    label = 'Test label';
    id = 'test-id';
    handler = jest.fn();
  });

  test('Smoke test', () => {
    render(<TextInput id={id} label={label} emitValue={handler} value="" />);
  });

  test('Label test', () => {
    const { queryByLabelText } = render(
      <TextInput id={id} label={label} emitValue={handler} value="" />,
    );
    const inputElement = queryByLabelText(label);
    expect(inputElement).toBeInTheDocument();
  });

  test('Using test id', () => {
    const testId = 'some-identifier';
    const { queryByTestId } = render(
      <TextInput id={id} label={label} emitValue={handler} value="" />,
    );

    expect(queryByTestId(testId)).toBeInTheDocument();
    expect(queryByTestId('foo')).not.toBeInTheDocument();
    expect(queryByTestId('foo')).toBeNull();
  });

  test('Make sure emitValue custom event is called', () => {
    const { getByLabelText } = render(
      <TextInput id={id} label={label} emitValue={handler} value="" />,
    );
    const inputField = getByLabelText(label);
    expect(handler).not.toHaveBeenCalled();
    fireEvent.change(inputField, { target: { value: 'some input' } });
    expect(handler).toHaveBeenCalled();
    expect(handler).toHaveBeenLastCalledWith('some input');
    console.log('handler calls: ', handler.mock.calls);
  });
});
