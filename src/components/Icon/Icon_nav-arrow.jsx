import Icon from './Icon';

const IconNavArrow = ({ className, ...props }) => {
  return (
    <Icon {...props} className={`${className}`}>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.32424 0.160156C5.15627 0.160156 4.98437 0.226563 4.85547 0.355469C4.59766 0.613281 4.59766 1.03516 4.85547 1.29297L13.6797 10.1172L4.98437 18.8125C4.72656 19.0703 4.72656 19.4922 4.98437 19.75C5.24219 20.0078 5.66406 20.0078 5.92187 19.75L15.0898 10.5859C15.3477 10.3281 15.3477 9.90625 15.0898 9.64844L5.79688 0.355469C5.66406 0.222656 5.49611 0.160156 5.32424 0.160156Z" 
          fill="currentColor" />
      </svg>
    </Icon>
  );
};

export default IconNavArrow;
