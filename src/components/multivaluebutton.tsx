import React, { useState, type ReactNode } from 'react';

interface ButtonValueProps {
  icon: string;
  label: string;
}

export function ButtonValue({ icon, label }: ButtonValueProps) {
  return (
    <span>
      <i className={`fa fa-fw ${icon}`}></i>
      {label}
    </span>
  );
}

interface MultiValueButtonProps {
  children: ReactNode;
  onChange?: (event: { value: number }) => void;
}

export function MultiValueButton({ children, onChange }: MultiValueButtonProps) {
  const [_selectedValue, setSelectedValue] = useState(0);

  const handleButtonClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSelectedValue = parseInt(e.target.value, 10);
    setSelectedValue(newSelectedValue);
    if (onChange) {
      onChange({ value: newSelectedValue });
    }
  };

  return (
    <div className="centered tool-box">
      <div className="btn-group" onChange={handleButtonClick}>
        {React.Children.map(children, (child, i) =>
          React.isValidElement(child) ? (
            <label className="btn">
              <input
                name="tile-type"
                type="radio"
                value={i}
                defaultChecked={(child.props as Partial<Record<string, unknown>>).def ? true : false}
              />
              {child}
            </label>
          ) : null
        )}
      </div>
    </div>
  );
}