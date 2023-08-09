import PropTypes from 'prop-types';
import './Button.scss';

export const Button = ({ primary, border, size, type, children, ...props }) => {
  const mode = primary ? 'button__primary' : 'button__secondary';
  const isBorder = border ? `${mode}_border` : '';
  return (
    <button
      type={type}
      className={['button', `button_size_${size}`, mode, isBorder].join(' ')}
      {...props}>
      {children}
    </button>
  );
};

Button.propTypes = {
  primary: PropTypes.bool,
  size: PropTypes.oneOf(['xs','s', 'm', 'l', 'xl', 'xxl']),
  border: PropTypes.bool,
  type: PropTypes.oneOf(['button', 'submit']),
  onClick: PropTypes.func,
};

Button.defaultProps = {
  primary: false,
  size: 'm',
  border: true,
  onClick: undefined,
};
