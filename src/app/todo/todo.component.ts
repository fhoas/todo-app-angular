import { Component } from '@angular/core';
import { Model } from '../model';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
})
export class TodoComponent {
  displayAll: boolean = true;

  constructor() {}
  model = new Model();

  addItems(value: string) {
    if (value != '') {
      this.model.items.push({ desc: value, action: false });
    } else {
      alert("bilgi girin")
    }
  }
  getName() {
    return this.model.name;
  }

  getItems() {
    if (this.displayAll) {
      return this.model.items;
    }
    return this.model.items.filter((item) => !item.action);
  }

  addItem(value: string) {
    console.log(value);
  }
}
