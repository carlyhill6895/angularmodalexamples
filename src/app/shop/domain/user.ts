import {Order} from './order';

export class User {
  constructor(public name: string, public email: string, public previousOrders: Order[]) {}
}
