export const theme = {
  button: {
    primary: '#ff0000',
    secondary: '#0000ff',
  },
};

export const getColorButton = props => (
  props.isPrimary ? props.theme.button.primary : props.theme.button.secondary
);
