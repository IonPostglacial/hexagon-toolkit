import React from 'react';

interface MenuEntryProps {
  icon?: string;
  href?: string;
  label: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

export default function MenuEntry({ icon, href = "#1", label, onClick }: MenuEntryProps) {
  const entryIcon = icon ? `fa fa-pull-left fa-fw ${icon}` : '';

  return (
    <li>
      <a className="menu-entry" href={href} onClick={onClick}>
        <i className={entryIcon}></i>
        {label}
      </a>
    </li>
  );
}