import React from 'react';

interface TabProps {
  id: string;
  label: string;
  icon?: string;
  checked?: boolean;
}

export default function Tab({ id, label, icon, checked }: TabProps) {
  const entryIcon = icon ? `fa fa-fw ${icon}` : '';

  const handleClick = (e: React.MouseEvent<HTMLLIElement>) => {
    const inputElement = e.currentTarget.querySelector('input');
    if (inputElement) {
      inputElement.click();
    }
  };

  return (
    <li onClick={handleClick}>
      <input
        name="dummy-tabx"
        type="radio"
        defaultChecked={checked}
      />
      <label htmlFor={id}>
        <i className={entryIcon}></i>
        {label}
      </label>
    </li>
  );
}
