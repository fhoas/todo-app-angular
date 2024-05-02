export class TodoItem {
  constructor(public desc: string, public action: boolean) {
    (this.desc = desc), (this.action = action);
  }
}
