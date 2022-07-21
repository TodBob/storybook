import PropTypes from 'prop-types';
import { BoxStyled } from './Box.style';

const Box = ({
  id, children, $style, className, justify, align, height, width, background,
}) => (
  <BoxStyled
    id={id}
    $style={$style}
    className={className}
    $justify={justify}
    $align={align}
    $height={height}
    $width={width}
    $background={background}
  >
    {children}
  </BoxStyled>
);

export default Box;

Box.propTypes = {
  /** Justify content */
  justify: PropTypes.string,
  /** Align items */
  align: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  background: PropTypes.string,
};

Box.defaultProps = {
  justify: 'center',
  align: 'center',
  height: '100%',
  width: '100%',
  background: 'transparent',
};
