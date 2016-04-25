import React from 'react';

class SelectButton extends React.Component {
  render () {
    return (
      <label className="btn">
        <input name="tile-type" type="radio" value={ this.props.value } defaultChecked={ this.props.def ? 'checked' : '' } />
        <span>
          <i className={'fa fa-fw fa-' + this.props.symbol }></i>
          { this.props.name }
        </span>
      </label>
    );
  }
};

export default class HorizontalSelectBox extends React.Component {
  constructor (props) {
    super (props);
    this.state = { selectedValue: this.props.data.findIndex(tile => tile.def) };
  }
  handleButtonClick (e) {
    const newSelectedValue = parseInt(e.target.value);
    this.setState({ selectedValue: newSelectedValue });
    if (this.props.onChange) {
      this.props.onChange({ value: newSelectedValue });
    }
  }
  render () {
    return (
      <form className="centered tool-box">
        <fieldset>
          {
            this.props.data.map((tile, val) =>
              <SelectButton key={ tile.symbol } value={ val } name={ tile.name } symbol={ tile.symbol } def={ tile.def } />
            )
          }
        </fieldset>
      </form>
    );
  }
}
