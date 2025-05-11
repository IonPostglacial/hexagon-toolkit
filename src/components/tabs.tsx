import React, { type ReactNode } from 'react';

interface TabProps {
  id: string;
  checked?: boolean;
  children: ReactNode;
}

interface TabsProps {
  children: ReactNode;
}

export default function Tabs({ children }: TabsProps) {
  return (
    <div className="tabbed-view">
      <ul className="tabs">{children}</ul>
      <ul className="tabs-contents">
        {React.Children.map(children, (child) => {
          if (React.isValidElement<TabProps>(child)) {
            return (
              <li>
                <input
                  type="radio"
                  id={child.props.id}
                  name="tabs"
                  defaultChecked={child.props.checked}
                />
                <div className="tab-content">{child.props.children}</div>
              </li>
            );
          }
          return null;
        })}
      </ul>
    </div>
  );
}