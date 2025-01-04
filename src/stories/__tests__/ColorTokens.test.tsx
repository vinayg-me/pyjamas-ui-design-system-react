import React from 'react';
import { render, screen } from '@testing-library/react';
import { ColorSwatch } from '../../stories/ColorTokens.stories';

describe('Color Components', () => {
  it('renders ColorSwatch correctly', () => {
    render(<ColorSwatch name="Test Color" value="#FF0000" />);
    expect(screen.getByText('Test Color')).toBeInTheDocument();
    expect(screen.getByText('#FF0000')).toBeInTheDocument();
  });

  it('applies correct background color to swatch', () => {
    render(<ColorSwatch name="Test Color" value="#FF0000" />);
    const swatch = screen.getByRole('generic').querySelector('div');
    expect(swatch).toHaveStyle({ backgroundColor: '#FF0000' });
  });
});