import React from 'react';

type TextInputProps = {
  label: string;
  id: string;
  emitValue: (value: string) => void;
  startingValue: string;
};


class TextInputClass extends React.Component<TextInputProps> {
  constructor(props: TextInputProps) {
    super(props);
  }

  render() {
    // const {id, label, emitValue, startingValue} = this.props;
    return (
      <div className="form-group">
        <label htmlFor={this.props.id}>{this.props.label}</label>
        <input
          data-testid="some-identifier"
          type="text"
          id={this.props.id}
          className="form-control"
          onChange={(e) => this.props.emitValue(e.currentTarget.value)}
          value={this.props.startingValue}
        />
      </div>
    );
  
  }

}

export default TextInputClass;