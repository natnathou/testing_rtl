import React from 'react';
import { render, waitFor } from '@testing-library/react';
import Username from '../Username';
import axiosMock from 'axios';
import { mocked } from 'ts-jest/utils';
import axios from 'axios';

jest.mock('axios');
const mockGetUser = mocked(axiosMock.get, true);

// const axiosSpy = jest.spyOn(axiosMock, 'get');
// const mockGetUser = mocked(axiosSpy, true);

describe('test Username component rendering', () => {
  beforeEach(() => {
    render(<Username />);
  });

  test('should be rendering', () => {});
});

describe('test axios', () => {
  test('test axios renderring', async () => {
    mockGetUser.mockResolvedValueOnce({ data: [{ name: 'Patrick' }] });
    mockGetUser.mockResolvedValueOnce({ data: [{ username: 'patou' }] });

    render(<Username />);
    await waitFor(() => expect(mockGetUser).toHaveBeenCalledTimes(2));
  });
});
