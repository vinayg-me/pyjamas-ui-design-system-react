import React from 'react';
import type { Meta } from '@storybook/react';
import { colors } from '../theme/colors';

interface ColorSwatchProps {
  name: string;
  value: string;
}

interface ColorScaleProps {
  title: string;
  colors: Record<string, string | Record<string, string>>;
  prefix?: string;
}

interface BrandColorSectionProps {
  title: string;
  colors: Record<string, string>;
  prefix: string;
}

export const ColorSwatch: React.FC<ColorSwatchProps> = ({ name, value }) => (
  <div className="flex items-center gap-2 p-2">
    <div 
      className="w-16 h-16 rounded-lg shadow-sm" 
      style={{ backgroundColor: value }}
    />
    <div className="flex flex-col">
      <span className="text-sm font-medium">{name}</span>
      <span className="text-xs text-neutral-500">{value}</span>
    </div>
  </div>
);

const ColorScale: React.FC<ColorScaleProps> = ({ title, colors, prefix = '' }) => {
  const renderSwatches = (colorObj: Record<string, string | Record<string, string>>, parentKey = '') => {
    return Object.entries(colorObj).map(([key, value]) => {
      const fullKey = parentKey ? `${parentKey}-${key}` : key;
      if (typeof value === 'string') {
        return (
          <ColorSwatch 
            key={fullKey} 
            name={`${prefix}${fullKey}`} 
            value={value}
          />
        );
      }
      return null;
    });
  };

  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {renderSwatches(colors)}
      </div>
    </div>
  );
};

const BrandColorSection: React.FC<BrandColorSectionProps> = ({ title, colors, prefix }) => (
  <div className="mb-8">
    <h3 className="text-lg font-semibold mb-4">{title}</h3>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {Object.entries(colors).map(([key, value]) => (
        <ColorSwatch 
          key={key}
          name={`${prefix}${key}`}
          value={value}
        />
      ))}
    </div>
  </div>
);

const meta = {
  title: 'Design System/Color Tokens',
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta;

export default meta;

export const AllColors: React.FC = () => (
  <div className="p-8 max-w-7xl mx-auto">
    <h1 className="text-3xl font-bold mb-8">Color Tokens</h1>
    
    {/* UI Neutral */}
    <ColorScale 
      title="UI Neutral" 
      colors={colors.neutral as Record<string, string>} 
      prefix="neutral-"
    />

    {/* UI Chromatic */}
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-6">UI Chromatic</h2>
      {Object.entries(colors).map(([key, value]) => {
        if (['orange', 'red', 'purple', 'blue', 'green'].includes(key)) {
          return (
            <ColorScale 
              key={key}
              title={key.charAt(0).toUpperCase() + key.slice(1)}
              colors={value as Record<string, string>}
              prefix={`${key}-`}
            />
          );
        }
        return null;
      })}
    </div>

    {/* Themes */}
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-6">Themes</h2>
      {Object.entries(colors).map(([key, value]) => {
        if (['indigo', 'dark-blue', 'light-blue', 'theme-green', 'dark-red', 'light-red'].includes(key)) {
          return (
            <ColorScale 
              key={key}
              title={key.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
              colors={value as Record<string, string>}
              prefix={`${key}-`}
            />
          );
        }
        return null;
      })}
    </div>

    {/* Data Visualization */}
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-6">Data Visualization</h2>
      {Object.entries(colors.viz as Record<string, Record<string, string>>).map(([key, value]) => (
        <ColorScale 
          key={key}
          title={key.charAt(0).toUpperCase() + key.slice(1)}
          colors={value}
          prefix={`viz-${key}-`}
        />
      ))}
    </div>

    {/* Brand Colors */}
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-6">Brand Colors</h2>
      
      {/* Base Brand Colors */}
      <BrandColorSection
        title="Base"
        colors={{
          'white': (colors.brand as any).white,
          'charcoal': (colors.brand as any).charcoal,
        }}
        prefix="brand-"
      />

      {/* Brand Orange */}
      <BrandColorSection
        title="Orange"
        colors={(colors.brand as any).orange}
        prefix="brand-orange-"
      />

      {/* Brand Purple */}
      <BrandColorSection
        title="Purple"
        colors={(colors.brand as any).purple}
        prefix="brand-purple-"
      />

      {/* Brand Gray */}
      <BrandColorSection
        title="Gray"
        colors={(colors.brand as any).gray}
        prefix="brand-gray-"
      />

      {/* Brand Pink */}
      <BrandColorSection
        title="Pink"
        colors={(colors.brand as any).pink}
        prefix="brand-pink-"
      />
    </div>
  </div>
);

export const UIChromatic: React.FC = () => (
  <div className="p-8">
    <h2 className="text-2xl font-bold mb-6">UI Chromatic Colors</h2>
    {Object.entries(colors).map(([key, value]) => {
      if (['orange', 'red', 'purple', 'blue', 'green'].includes(key)) {
        return (
          <ColorScale 
            key={key}
            title={key.charAt(0).toUpperCase() + key.slice(1)}
            colors={value as Record<string, string>}
            prefix={`${key}-`}
          />
        );
      }
      return null;
    })}
  </div>
);

export const ThemeColors: React.FC = () => (
  <div className="p-8">
    <h2 className="text-2xl font-bold mb-6">Theme Colors</h2>
    {Object.entries(colors).map(([key, value]) => {
      if (['indigo', 'dark-blue', 'light-blue', 'theme-green', 'dark-red', 'light-red'].includes(key)) {
        return (
          <ColorScale 
            key={key}
            title={key.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
            colors={value as Record<string, string>}
            prefix={`${key}-`}
          />
        );
      }
      return null;
    })}
  </div>
); 