export interface Child {
  name: string;
  age: number;
}

export interface Baggage {
  key: string;
  value: string;
}

export interface Passenger {
  id: number;
  fullname: string;
  checkedIn: boolean;
  checkInDate?: number;
  baggage: string;
  children?: Array<Child>;
}
