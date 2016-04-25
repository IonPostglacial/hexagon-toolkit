import React from 'react';

export default class CoordBox extends React.Component {
  render () {
    return (
      <table className="tool numerical gauge">
        <caption>{ this.props.caption }</caption>
        <tbody>
          <tr>
            { Object.keys(this.props.data).map(key => [<th>{ key }</th>, <td>{ this.props.data[key] }</td>]) }
          </tr>
        </tbody>
      </table>
    );
  }
}
