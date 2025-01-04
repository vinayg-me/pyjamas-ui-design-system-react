import React from 'react';
import { colors } from '../theme/colors';

export default {
  title: 'Design System/Color Tokens',
  parameters: {
    layout: 'fullscreen',
  },
};

const ColorSwatch = ({ color, name, value }) => (
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

const ColorScale = ({ title, colors, prefix = '' }) => (
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

export const AllColors = () => (
  <div className="p-8 max-w-7xl mx-auto">
    <h1 className="text-3xl font-bold mb-8">Color Tokens</h1>
    
    {/* UI Neutral */}
    <ColorScale 
      title="UI Neutral" 
      colors={colors.neutral} 
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
              colors={value}
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
              colors={value}
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
      {Object.entries(colors.viz).map(([key, value]) => (
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
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Object.entries(colors.brand).map(([key, value]) => {
          if (key !== 'gray') {
            return (
              <ColorSwatch 
                key={key}
                name={`brand-${key}`}
                value={value}
              />
            );
          }
          return null;
        })}
      </div>
      <ColorScale 
        title="Brand Gray"
        colors={colors.brand.gray}
        prefix="brand-gray-"
      />
    </div>
  </div>
);

// Optional: Add more specific stories for each category
export const UIChromatic = () => (
  <div className="p-8">
    <h2 className="text-2xl font-bold mb-6">UI Chromatic Colors</h2>
    {Object.entries(colors).map(([key, value]) => {
      if (['orange', 'red', 'purple', 'blue', 'green'].includes(key)) {
        return (
          <ColorScale 
            key={key}
            title={key.charAt(0).toUpperCase() + key.slice(1)}
            colors={value}
            prefix={`${key}-`}
          />
        );
      }
      return null;
    })}
  </div>
);

export const ThemeColors = () => (
  <div className="p-8">
    <h2 className="text-2xl font-bold mb-6">Theme Colors</h2>
    {Object.entries(colors).map(([key, value]) => {
      if (['indigo', 'dark-blue', 'light-blue', 'theme-green', 'dark-red', 'light-red'].includes(key)) {
        return (
          <ColorScale 
            key={key}
            title={key.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
            colors={value}
            prefix={`${key}-`}
          />
        );
      }
      return null;
    })}
  </div>
); 