export interface HasId {
  id: string;
  version: number;
  active: boolean;
}

interface Address {
  street: string;
  city: string;
  state: string;
  zip: string;
}

export interface Category extends HasId {
  categoryName: string;
  categoryType: string;
}

export interface Payee extends HasId {
  payeeName: string;
  address: Address;
  categoryId: string;
  image?: string;
  motto?: string;
}

export interface Person extends HasId {
  firstName: string;
  lastName: string;
  gender: string;
  dateOfBirth: string;
  address: Address;
}
