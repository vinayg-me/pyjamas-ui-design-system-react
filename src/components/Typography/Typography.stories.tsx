import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { H1, H2, H3, Body, SmallText } from './index';

const meta = {
  title: 'Components/Typography',
  parameters: {
    layout: 'padded',
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Overview: Story = {
  render: () => (
    <div className="space-y-8">
      {/* Dynamic Typography */}
      <section>
        <h2 className="mb-4 text-gray-500 uppercase text-sm font-medium">Dynamic Typography</h2>
        <div className="space-y-4">
          <H1>Heading 1 (24px - 36px)</H1>
          <H2>Heading 2 (21px - 25px)</H2>
          <H3>Heading 3 (18px - 20px)</H3>
          <Body>Body text (14px) - Used for body text, input labels, and help text</Body>
          <SmallText>Small text (12px) - Used for meta text and small labels</SmallText>
        </div>
      </section>

      {/* Typography with Custom Elements */}
      <section>
        <h2 className="mb-4 text-gray-500 uppercase text-sm font-medium">Custom Element Types</h2>
        <div className="space-y-4">
          <H1 as="div">Heading 1 as div</H1>
          <H2 as="div">Heading 2 as div</H2>
          <Body as="div">Body text as div</Body>
        </div>
      </section>

      {/* Typography Scale Reference */}
      <section>
        <h2 className="mb-4 text-gray-500 uppercase text-sm font-medium">Type Scale Reference</h2>
        <div className="space-y-2">
          <div className="text-text-800">text-800: 28px (1.75rem)</div>
          <div className="text-text-700">text-700: 24px (1.5rem)</div>
          <div className="text-text-600">text-600: 21px (1.3125rem)</div>
          <div className="text-text-500">text-500: 18px (1.125rem)</div>
          <div className="text-text-400">text-400: 16px (1rem)</div>
          <div className="text-text-300">text-300: 14px (0.875rem)</div>
          <div className="text-text-200">text-200: 13px (0.8125rem)</div>
          <div className="text-text-100">text-100: 12px (0.75rem)</div>
        </div>
      </section>

      {/* Responsive Behavior */}
      <section>
        <h2 className="mb-4 text-gray-500 uppercase text-sm font-medium">Responsive Behavior</h2>
        <div className="space-y-4">
          <div className="text-text-700 sm:text-text-800">
            This text changes from 24px to 28px at the sm breakpoint (500px)
          </div>
        </div>
      </section>
    </div>
  ),
};

// Individual component stories
export const Heading1: Story = {
  render: () => <H1>Heading 1</H1>,
};

export const Heading2: Story = {
  render: () => <H2>Heading 2</H2>,
};

export const Heading3: Story = {
  render: () => <H3>Heading 3</H3>,
};

export const BodyText: Story = {
  render: () => <Body>Body text example</Body>,
};

export const Small: Story = {
  render: () => <SmallText>Small text example</SmallText>,
};
