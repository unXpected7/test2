// make button component
const Button = ({
    children,
    type,
    onClick,
    className,
    disabled,
    ...props
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={className}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    );
};
export default Button;