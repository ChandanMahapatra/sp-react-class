// variable: type

let todayExplicit: Date; // Explicitly set todayExplicit to a type
todayExplicit = new Date();

let todayInferred = new Date(); // assumes todayInferred is a Date

let todayImplicit; // implicitly 'any' which can raise errors / warnings
// let todayImplicit: any
todayImplicit = new Date();
todayImplicit = 5;

// Union type
let input: string | number | boolean;

// Type definition as an alias
type stringOrNumber = string | number;

let input2: stringOrNumber;

function add(x: number, y: number): number {
  return x + y;
}

// How to define types

type PersonType = {
  firstName: string;
  lastName: string;
};

interface PersonInterface {
  firstName: string;
  lastName: string;
}

// Erased
// --------------------------------
// Generates JavaScript output

class PersonClass {
  // firstName = '';
  firstName = '';
  lastName = '';

  constructor() {}
}

function PersonFn(firstName: string, lastName: string) {
  //this.firstName = firstName;
  //this.lastName = lastName;
}

const person: PersonInterface = {
  firstName: 'John',
  lastName: 'Paxton',
};

const person2 = new PersonClass();
person2.firstName = 'John';
person2.lastName = 'Paxton';

// Modifiers
type Transmission = 'automatic' | 'manual';

// Generates JS
enum TransmissionEnum {
  'automatic',
  'manual',
}

const transmissionTypes = {
  AUTOMATIC: 'AUTOMATIC',
  MANUAL: 'MANUAL',
};

class Car {
  topSpeed = 150;

  private odometer = 0;

  public color = 'red';
  readonly transmission = transmissionTypes.AUTOMATIC;
}

let honda = new Car();
// console.log(honda.odometer);


// Functions as types

interface PersonWithFunction {
  firstName: string;
  middleName?: string;
  lastName: string;
  getName: () => string;
  setName: (x: string, y: string) => boolean
}

// Utility Types
interface Book {
  title: string;
  author: string;
}

// type ReadOnlyBook = Readonly<Book>;

type ReadOnlyBook = {
  readonly author: string;
  readonly title: string;
}

type CompletePerson = {
  firstName: string;
  middleName: string;
  lastName: string;
  street: string;
  city: string;
  state: string;
  zip: string;
}

// type PartialPerson = Partial<CompletePerson>;

type PartialPerson = {
  firstName?: string;
  middleName?: string;
  lastName?: string;
  street?: string;
  city?: string;
  state?: string;
  zip?: string;
}

type PersonWithOtherProperties = {
  firstName: string;
  lastName: string;
  [key: string]: string | number | Date;
}

type KeyStringValueDate = {
  [key: string]: Date
}

const map = new Map<string, Date>();



export {};
