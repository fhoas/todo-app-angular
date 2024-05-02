import { TodoItem } from "./todoitems";

export class Model {
  name: string;
  items: TodoItem[];

  constructor() {
    this.name = 'fhoas';
    this.items = [
            {
      desc: 'breakfast',
      action: true,
    },
    {
      desc: 'shopping',
      action: false,
    },
    {
      desc: 'sport',
      action: true,
    },
    ]
  }
}
