import React from 'react';
import { Loader2 } from 'lucide-react';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  className = '', 
  isLoading = false, 
  disabled = false,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-300 transform active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-[var(--color-primary-red)] text-white hover:bg-red-700 hover:shadow-lg focus:ring-[var(--color-primary-red)]",
    secondary: "bg-[var(--color-primary-darkblue)] text-white hover:bg-blue-900 hover:shadow-lg focus:ring-[var(--color-primary-darkblue)]",
    outline: "border-2 border-[var(--color-primary-darkblue)] text-[var(--color-primary-darkblue)] hover:bg-[var(--color-primary-darkblue)] hover:text-white",
    ghost: "text-[var(--color-primary-darkblue)] hover:bg-gray-100",
    white: "bg-white text-[var(--color-primary-red)] hover:bg-gray-50 hover:shadow-lg"
  };

  const sizes = {
    small: "px-4 py-2 text-sm",
    medium: "px-6 py-3 text-base",
    large: "px-8 py-4 text-lg",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={isLoading || disabled}
      {...props}
    >
      {isLoading && <Loader2 className="w-5 h-5 mr-2 animate-spin" />}
      {children}
    </button>
  );
};

export default Button;
