
/* ======= Query ======= */
interface Query {
  comp: string; // 分公司代碼
  sett: string; // 帳號
}

/* ===== Data ======= */

interface IUser {
  id: number;
  name: string;
  age: number;
}

interface ICustomer {
  id: number;
  comp: string; // 分公司代碼
  sett: string; // 帳號
}

interface Child {
  name: string;
  age: number;
}

interface Passenger {
  id: number;
  fullname: string;
  checkedIn: boolean;
  checkInDate?: number;
  baggage: string;
  children?: Array<Child>;
}

const passengers: Passenger[] = [{
      id: 1,
      fullname: 'Stephen',
      checkedIn: true,
      checkInDate: 1490742000000,
      baggage: '',
      children: undefined
    }, {
      id: 2,
      fullname: 'Rose',
      checkedIn: false,
      checkInDate: undefined,
      baggage: '',
      children: [{ name: 'Ted', age: 12 }, { name: 'Chloe', age: 7 }]
    }, {
      id: 3,
      fullname: 'James',
      checkedIn: true,
      checkInDate: 1491606000000,
      baggage: '',
      children: undefined
    }, {
      id: 4,
      fullname: 'Louise',
      checkedIn: true,
      checkInDate: 1488412800000,
      baggage: '',
      children: [{ name: 'Jessica', age: 1 }]
    }, {
      id: 5,
      fullname: 'Tina',
      checkedIn: false,
      checkInDate: undefined,
      baggage: '',
      children: undefined
    }];

const myUsers: IUser[] = [
  {id: 1, name: 'Tony1', age: 18 },
  {id: 2, name: 'Tony2', age: 20 },
  {id: 3, name: 'Tony3', age: 30 }
];

const myCustomers: ICustomer[] = [
  {id: 1, comp: '8560', sett: '123456' },
  {id: 2, comp: '8561', sett: '987654' },
  {id: 3, comp: '8562', sett: '987654' },
];


module.exports = () => {
  return {
    // users: [...myUsers],
    // customers: [...myCustomers],
    passengers: [...passengers]
  };
};
