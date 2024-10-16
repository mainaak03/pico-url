import React from 'react';

interface IconProps {
  width?: number;
  height?: number;
  className?: string;
  onClick?: () => void;
}

const OpenLinkIcon: React.FC<IconProps> = ({
  width = 24,
  height = 24,
  className,
  onClick,
}) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    height={height}
    width={width}
    viewBox='0 -960 960 960'
    fill='currentColor'
    className={className}
    onClick={onClick}
    style={{ cursor: onClick ? 'pointer' : 'default' }}
  >
    <path d='M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z' />
  </svg>
);

export default OpenLinkIcon;
