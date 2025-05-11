import React from 'react';

interface PushButtonProps {
  href?: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  download?: string;
  icon: string;
  label: string;
}

export default function PushButton({ href = "#1", onClick, download, icon, label }: PushButtonProps) {
  const linkAttributes: React.AnchorHTMLAttributes<HTMLAnchorElement> = {
    className: 'btn',
    href,
    onClick,
    ...(download && { download }),
  };

  return (
    <a {...linkAttributes}>
      <i className={`fa fa-pull-left fa-fw ${icon}`}></i>
      {label}
    </a>
  );
}