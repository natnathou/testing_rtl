import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import Input from '../Input';
import { mocked } from 'ts-jest';

let mockValue = jest.fn();
let input: HTMLInputElement;

const setup = () => {
  const component = render(<Input />);
  input = component.getByLabelText('Enter your text:') as HTMLInputElement;
  return {
    input,
    ...component,
  };
};

describe('When evrything is ok', () => {
  beforeEach(() => {
    setup();
  });
  afterEach(() => {});

  test('Should render Input without crashing', () => {});

  test('Document has a textBox', () => {
    expect(screen.getAllByRole('textbox').length).toBe(1);
  });

  test('Document has a label', () => {
    expect(screen.getAllByLabelText('Enter your text:').length).toBe(1);
  });

  test('Input should right updated when value change', () => {
    const newValue = 'newValue';
    fireEvent.change(input, { target: { value: newValue } });
    expect(input.value).toBe(newValue);
  });
});

test('setValue is called', () => {
  React.useState = jest.fn(() => ['', mockValue]);
  setup();
  const newValue = 'newValue';
  fireEvent.change(input, { target: { value: newValue } });
  expect(mockValue).toHaveBeenCalledWith(newValue);
});

test('setValue is called', () => {
  jest.clearAllMocks();
  const setState = jest.fn();
  const useStateMock: any = (initState: any) => [initState, setState];
  jest.spyOn(React, 'useState').mockImplementation(useStateMock);

  setup();
  const newValue = 'newValue';
  fireEvent.change(input, { target: { value: newValue } });

  expect(setState).toHaveBeenCalledWith(newValue);
});
