import React, { ElementType } from 'react';
import { twMerge } from 'tailwind-merge';

interface TypographyProps<T extends ElementType> {
  children: React.ReactNode;
  as?: T;
  className?: string;
  // Extend with HTML attributes of the element type
  [key: string]: any;
}

// Dynamic typography components
export const H1 = <T extends ElementType = 'h1'>({
  children,
  className,
  as,
  ...props
}: TypographyProps<T>) => {
  const Component = as || 'h1';
  return (
    <Component
      className={twMerge('text-text-700 sm:text-text-800', 'font-bold leading-tight', className)}
      {...props}
    >
      {children}
    </Component>
  );
};

export const H2 = <T extends ElementType = 'h2'>({
  children,
  className,
  as,
  ...props
}: TypographyProps<T>) => {
  const Component = as || 'h2';
  return (
    <Component
      className={twMerge('text-text-600', 'font-semibold leading-tight', className)}
      {...props}
    >
      {children}
    </Component>
  );
};

export const H3 = <T extends ElementType = 'h3'>({
  children,
  className,
  as,
  ...props
}: TypographyProps<T>) => {
  const Component = as || 'h3';
  return (
    <Component
      className={twMerge('text-text-500', 'font-semibold leading-snug', className)}
      {...props}
    >
      {children}
    </Component>
  );
};

export const Body = <T extends ElementType = 'p'>({
  children,
  className,
  as,
  ...props
}: TypographyProps<T>) => {
  const Component = as || 'p';
  return (
    <Component className={twMerge('text-text-300', 'leading-normal', className)} {...props}>
      {children}
    </Component>
  );
};

export const SmallText = <T extends ElementType = 'span'>({
  children,
  className,
  as,
  ...props
}: TypographyProps<T>) => {
  const Component = as || 'span';
  return (
    <Component className={twMerge('text-text-100', 'leading-normal', className)} {...props}>
      {children}
    </Component>
  );
};

// Fixed scale typography (for markdown content)
export const MarkdownContent = ({
  children,
  className,
  ...props
}: Omit<TypographyProps<'div'>, 'as'>) => {
  return (
    <div
      className={twMerge(
        'prose',
        'max-w-none',
        '[&_h1]:text-text-700',
        '[&_h2]:text-text-600',
        '[&_h3]:text-text-500',
        '[&_p]:text-text-300',
        '[&_small]:text-text-100',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
