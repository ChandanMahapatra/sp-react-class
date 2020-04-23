import React from 'react';

type TextInputProps = {
  label: string;
  id: string;
  emitValue: (value: string) => void;
  startingValue: string;
};

function TextInput({ id, label, startingValue, emitValue }: TextInputProps) {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <input
        data-testid="some-identifier"
        type="text"
        id={id}
        className="form-control"
        onChange={(e) => emitValue(e.currentTarget.value)}
        value={startingValue}
      />
    </div>
  );
}

export default TextInput;
