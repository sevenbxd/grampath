import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}) => {
  const baseStyles = 'font-bold rounded-xl transition-all duration-200 flex items-center justify-center gap-2';
  
  const variants = {
    primary: 'bg-[#58cc02] text-white shadow-[0_4px_0_#46a302] hover:shadow-[0_2px_0_#46a302] hover:translate-y-[2px] active:shadow-none active:translate-y-[4px]',
    secondary: 'bg-[#ff9600] text-white shadow-[0_4px_0_#d4820a] hover:shadow-[0_2px_0_#d4820a] hover:translate-y-[2px] active:shadow-none active:translate-y-[4px]',
    outline: 'border-2 border-[#e5e5e5] bg-white text-[#3c3c3c] hover:bg-[#f7f7f7]',
    ghost: 'bg-transparent text-[#3c3c3c] hover:bg-[#f7f7f7]'
  };
  
  const sizes = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-5 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};