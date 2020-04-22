import React from 'react';

const x = 'John';
const x1 = "John";
const x2 = `John ${x}`;

const y = 10;

const names = ['Robert', 'Travis', 'Ixshel'];

const tag = <p>Hello</p>;

const content = (<div>Your name is {names[0]}</div>);

const noJSX = React.createElement('p', {/* properties */})
