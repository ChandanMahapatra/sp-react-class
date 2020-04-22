import React from 'react';

type TextInputProps = {
  label: string;
  id: string;
  emitValue: (value: string) => void;
  value: string;
};

function TextInput({ id, label, value, emitValue }: TextInputProps) {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <input
        data-testid="some-identifier"
        type="text"
        id={id}
        className="form-control"
        onChange={(e) => emitValue(e.currentTarget.value)}
        value={value}
      />
    </div>
  );
}

export default TextInput;
