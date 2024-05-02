import { Component } from '@angular/core';
import { Model } from '../model';
import { TodoItem } from '../todoitems';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
})
export class TodoComponent {
  displayAll: boolean = true;

  constructor() {
    this.model.items = this.getItemsFromLS();
  }
  model = new Model();

  inputText: string = '';

  addItems() {
    if (this.inputText != '') {
      let data = { desc: this.inputText, action: false };
      this.model.items.push(data);
      let items = this.getItemsFromLS();
      items.push(data);
      this.inputText = '';
    } else {
      alert('bilgi girin');
    }
  }

  getItemsFromLS() {
    let items: TodoItem[] = [];

    let value = localStorage.getItem('items');

    if (value != null) {
      items = JSON.parse(value);
    }

    return items;
  }

  onActionChanged(item: TodoItem) {
    let items = this.getItemsFromLS();

    localStorage.clear();

    items.forEach((i) => {
      if (i.desc == item.desc) {
        i.action = item.action;
      }
    });
    localStorage.setItem('items', JSON.stringify(items));
  }

  getName() {
    return this.model.name;
  }

  displayCount() {
    return this.model.items.filter((i) => i.action).length;
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
