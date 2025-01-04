import { colors } from '../colors';

describe('Color Tokens', () => {
  // Test color structure
  it('should have all required color categories', () => {
    expect(colors).toHaveProperty('neutral');
    expect(colors).toHaveProperty('brand');
    expect(colors).toHaveProperty('viz');
  });

  // Test specific color values
  it('should have correct brand colors', () => {
    expect((colors.brand as { white: string }).white).toBeDefined();
    expect((colors.brand as { charcoal: string }).charcoal).toBeDefined();
  });

  // Test color scales
  it('should have complete color scales', () => {
    // Test UI Chromatic colors
    ['orange', 'red', 'purple', 'blue', 'green'].forEach(color => {
      expect(colors[color]).toBeDefined();
    });

    // Test theme colors
    ['indigo', 'dark-blue', 'light-blue', 'theme-green', 'dark-red', 'light-red'].forEach(color => {
      expect(colors[color]).toBeDefined();
    });
  });
});