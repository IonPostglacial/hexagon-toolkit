import type { ReactNode } from 'react';

interface CoordProps {
  label: string;
  value: string | number;
}

export function Coord({ label, value }: CoordProps) {
  return (
    <tr>
      <th>{label}</th>
      <td>{value}</td>
    </tr>
  );
}

interface CoordBoxProps {
  caption: string;
  children: ReactNode;
}

export function CoordBox({ caption, children }: CoordBoxProps) {
  return (
    <table className="tool numerical gauge">
      <caption>{caption}</caption>
      <tbody>{children}</tbody>
    </table>
  );
}