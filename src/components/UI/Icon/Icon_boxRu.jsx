import React from 'react';
import Icon from './Icon';

const IconBoxRu = ({ className, ...props }) => {
  return (
    <Icon {...props} className={`${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="68"
        height="68"
        viewBox="0 0 68 68"
        fill="none">
        <path
          opacity="0.25"
          d="M55.0819 18.9328C55.6849 19.2932 56.2061 19.7745 56.6139 20.3431L34 33.4223L11.3857 20.3429C11.7933 19.7741 12.3145 19.2935 12.9181 18.9328L31.4124 8.25533C31.4131 8.25496 31.4138 8.25459 31.4144 8.25422C33.0175 7.35016 34.9824 7.35016 36.5855 8.25422C36.5862 8.25459 36.5868 8.25496 36.5875 8.25533L55.0788 18.931C55.0798 18.9316 55.0809 18.9322 55.0819 18.9328Z"
          stroke="#7B7C82"
        />
        <path
          d="M34.0003 34.0001V60.9168C33.107 60.9154 32.2256 60.712 31.422 60.3218L12.7503 49.5268C11.8903 49.0292 11.176 48.3147 10.6788 47.4545C10.1815 46.5943 9.91887 45.6186 9.91699 44.6251V23.3751C9.92167 22.3713 10.1852 21.3857 10.682 20.5134L34.0003 34.0001Z"
          fill="#3DA1FF"
        />
        <path
          d="M58.0833 23.3751V44.6251C58.0815 45.6186 57.8188 46.5943 57.3216 47.4545C56.8243 48.3147 56.11 49.0292 55.25 49.5268L36.4933 60.3501C35.7142 60.7184 34.8613 60.9111 34 60.9168V34.0001L57.3183 20.5134C57.8142 21.3861 58.0777 22.3721 58.0833 23.3751Z"
          fill="#23252E"
        />
      </svg>
    </Icon>
  );
};

export default IconBoxRu;
