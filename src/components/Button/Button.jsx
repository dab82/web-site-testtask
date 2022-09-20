import { CustomButton } from './Button.styled';

const YellowButton = ({ type, onClick, children, style, disabled }) => {
  return (
    <CustomButton
      style={style}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </CustomButton>
  );
};

export default YellowButton;
