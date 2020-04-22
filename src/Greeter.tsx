import React, { useState } from 'react';

function Greeter() {
  // let name = 'Dan';

  const [name, setName] = useState('Dan');

  function changeToJohn() {
    console.log('Called changeToJohn()');
    setName('John');
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
      <TextInput label="Please enter a name" id="user-name" />
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
}

function TextInput({label, id}: TextInputProps) {
  //div.form-group>label+input:text.form-control

  return (
    <div className="form-group">
      <label htmlFor="first-name">{label}</label>
      <input type="text" id={id} className="form-control" />
      <button className="btn btn-info">Click here</button>
    </div>
  );
}

export default Greeter;
