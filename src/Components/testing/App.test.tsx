import { render, screen } from '@testing-library/react';
import React from 'react';
import App from '../App';

describe('When evrything is ok', () => {
  beforeEach(() => {
    render(<App />);
  });

  test('Should render App without crashing', () => {});
});
