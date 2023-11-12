const Button = ({ text, ...restProps }) => {
  return <button {...restProps}>{text}</button>;
};

export default Button;
