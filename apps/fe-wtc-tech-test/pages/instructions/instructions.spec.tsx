import React from 'react';
import { render } from '@testing-library/react';
import Instructions from './';

describe('pages/instructions', () => {
  it('should render the instructions', () => {
    const { container } = render(<Instructions />);
    expect(container).toMatchSnapshot();
  });
});
