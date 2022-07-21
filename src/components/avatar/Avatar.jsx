import PropTypes from 'prop-types';
import { Avatar as BaseAvatar } from 'baseui/avatar';

const Avatar = ({
  id, overrides, $style, className, name, src, size,
}) => (
  <BaseAvatar
    id={id}
    overrides={overrides}
    $style={$style}
    className={className}
    name={name}
    src={src}
    size={size}
  />
);

export default Avatar;

Avatar.propTypes = {
  /** Alternative text description of the image. */
  name: PropTypes.string,
  /** Image to display. */
  src: PropTypes.string,
  /** Defines the width/height of the image. Accepts labels from theme.sizing,
  or passes value to height/width. */
  size: PropTypes.string,
};

Avatar.defaultProps = {
  name: 'Jane Doe',
  size: 'scale1600',
  src: 'https://avatars.dicebear.com/api/human/yard.svg?width=285&mood=happy',
};
