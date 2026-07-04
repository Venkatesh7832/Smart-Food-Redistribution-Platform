function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) {
  const variants = {
    primary:
      "bg-green-600 hover:bg-green-700 text-white",
    secondary:
      "bg-slate-900 hover:bg-black text-white",
    outline:
      "border border-green-600 text-green-600 hover:bg-green-50",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      {...props}
      className={`
        rounded-xl
        font-semibold
        transition-all
        duration-300
        hover:scale-105
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
    >
      {children}
      onClick={() => {
    
        logout();
    
        navigate("/");
    
        }}
    
    
        Logout
    </button>

  );
}

export default Button;