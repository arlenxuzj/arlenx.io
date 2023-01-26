import {
  default as MuiButton,
  type ButtonProps as MuiButtonProps
} from '@mui/material/Button';
import { styled } from '@mui/material/styles';

export type ButtonProps<C extends React.ElementType, P = {}> = MuiButtonProps<
  C,
  P & { component?: C }
>;

export const StyledButton = styled(MuiButton)<MuiButtonProps>(
  () => ({})
) as typeof MuiButton;

const Button = <C extends React.ElementType>({
  children,
  variant = 'contained',
  sx,
  ...rest
}: ButtonProps<C>) => {
  return (
    <StyledButton
      {...rest}
      variant={variant}
      sx={[{}, ...(Array.isArray(sx) ? sx : [sx])]}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
