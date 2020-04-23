import React, { useState } from 'react';

type Person = {
  firstName?: string;
  middleName?: string;
  lastName?: string;
}

function Greeter() {
  // let name = 'Dan';

  const [name, setName] = useState('Dan');

  const [person, setPerson] = useState<Person>({firstName: 'John', lastName: 'Paxton'});

  function changeToJohn() {
    console.log('Called changeToJohn()');
    setName('John');

    setPerson({
      middleName: 'Robert'
    });
  }

  const changeToJohnArrow = () => {
    setName('John');
  };

  return (
    <div>
      <GreetingDisplay name={name} />
      <div>
        <button className="btn btn-primary" onClick={changeToJohn}>
          John
        </button>
        &nbsp;
        <button className="btn btn-secondary" onClick={() => setName('Dan')}>
          Dan
        </button>
      </div>
      <ControlledTextInput
        label="Please enter a name"
        id="user-name"
        emitValue={setName}
      />
    </div>
  );
}

type GreetingDisplayProps = {
  name: string;
};

function GreetingDisplay(props: GreetingDisplayProps) {
  return <p>Hello, {props.name}</p>;
}

type TextInputProps = {
  label: string;
  id: string;
  emitValue: (value: string) => void;
};

function TextInput({ label, id, emitValue }: TextInputProps) {
  //div.form-group>label+input:text.form-control

  let fieldValue = '';

  function getFieldData(event: React.FormEvent<HTMLInputElement>) {
    fieldValue = event.currentTarget.value;
  }

  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        id={id}
        className="form-control"
        onBlur={getFieldData}
      />
      <button className="btn btn-info" onClick={() => emitValue(fieldValue)}>
        Click here
      </button>
    </div>
  );
}

function ControlledTextInput({ label, id, emitValue }: TextInputProps) {
  const [fieldValue, setFieldValue] = useState('');

  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        id={id}
        className="form-control"
        onChange={(event) => setFieldValue(event.currentTarget.value)}
        value={fieldValue}
      />
      <button className="btn btn-info" onClick={() => emitValue(fieldValue)}>
        Click here
      </button>
    </div>
  );
}

export default Greeter;
