import PropTypes from 'prop-types';
import { Button as BaseButton } from 'baseui/button';

const Button = ({
  id, overrides, $style, className, children, onClick, startEnhancer, endEnhancer, disabled,
  isLoading, isSelected, shape, size, kind, colors,
}) => (
  <BaseButton
    id={id}
    overrides={overrides}
    $style={$style}
    className={className}
    onClick={onClick}
    startEnhancer={startEnhancer}
    endEnhancer={endEnhancer}
    disabled={disabled}
    isLoading={isLoading}
    isSelected={isSelected}
    shape={shape}
    size={size}
    kind={kind}
    colors={colors}
  >
    {children}
  </BaseButton>
);

export default Button;

Button.propTypes = {
  /** Function called when button is clicked. */
  onClick: PropTypes.func,
  /** Indicates that the button is disabled */
  disabled: PropTypes.bool,
  /** Show loading button style and spinner. */
  isLoading: PropTypes.bool,
  /** Indicates that the button is selected. */
  isSelected: PropTypes.bool,
  /** A component rendered at the start of the button. */
  startEnhancer: PropTypes.func,
  /** A component rendered at the end of the button. */
  endEnhancer: PropTypes.func,
  /** Defines the shape of the button. */
  shape: PropTypes.oneOf(['default', 'pill', 'round', 'circle', 'square']),
  /** Defines the size of the button. */
  size: PropTypes.oneOf(['mini', 'default', 'compact', 'large']),
  /** Defines the kind (purpose) of a button. */
  kind: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  /** Lets you customize the background and text color. */
  colors: PropTypes.shape({
    color: PropTypes.string,
    backgroundColor: PropTypes.string,
  }),
};

Button.defaultProps = {
  shape: 'default',
  size: 'default',
  kind: 'primary',
};
