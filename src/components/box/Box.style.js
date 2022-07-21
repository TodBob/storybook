import { styled } from 'baseui';

export const BoxStyled = styled('div', ({
  $theme, $justify, $align, $height, $width, $background,
}) => ({
  display: 'flex',
  justifyContent: $justify || 'center',
  alignItems: $align || 'center',
  height: $height || '100%',
  width: $width || '100%',
  background: $background || $theme.colors.backgroundPrimary,
}));
