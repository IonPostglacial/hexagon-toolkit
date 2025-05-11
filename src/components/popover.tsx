import type { ReactNode } from 'react';

interface PopoverProps {
  label: string;
  children: ReactNode;
}

export default function Popover({ label, children }: PopoverProps) {
  return (
    <label className="popover btn">
      <input type="checkbox" />
      <span>
        <i className="fa fa-pull-right fa-caret-down"></i>
        {label}
      </span>
      <div className="popover-panel">
        <ul>{children}</ul>
      </div>
    </label>
  );
}