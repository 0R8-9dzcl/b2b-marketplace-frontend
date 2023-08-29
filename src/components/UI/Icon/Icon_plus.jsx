import React from 'react';
import Icon from './Icon';

const IconPlus = ({ className, ...props }) => {
  return (
    <Icon {...props} className={`${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="57"
        height="57"
        viewBox="0 0 57 57"
        fill="none">
        <path
          d="M42.75 30.8704H30.875V42.7454C30.875 43.3752 30.6248 43.9793 30.1794 44.4247C29.734 44.8701 29.1299 45.1204 28.5 45.1204C27.8701 45.1204 27.266 44.8701 26.8206 44.4247C26.3752 43.9793 26.125 43.3752 26.125 42.7454V30.8704H14.25C13.6201 30.8704 13.016 30.6201 12.5706 30.1747C12.1252 29.7293 11.875 29.1252 11.875 28.4954C11.875 27.8655 12.1252 27.2614 12.5706 26.816C13.016 26.3706 13.6201 26.1204 14.25 26.1204H26.125V14.2454C26.125 13.6155 26.3752 13.0114 26.8206 12.566C27.266 12.1206 27.8701 11.8704 28.5 11.8704C29.1299 11.8704 29.734 12.1206 30.1794 12.566C30.6248 13.0114 30.875 13.6155 30.875 14.2454V26.1204H42.75C43.3799 26.1204 43.984 26.3706 44.4294 26.816C44.8748 27.2614 45.125 27.8655 45.125 28.4954C45.125 29.1252 44.8748 29.7293 44.4294 30.1747C43.984 30.6201 43.3799 30.8704 42.75 30.8704Z"
          fill="currentColor"
          stroke="currentColor"
        />
      </svg>
    </Icon>
  );
};

export default IconPlus;
