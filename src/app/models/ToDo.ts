export class ToDo {
  private name: string;
  private status: boolean;

  constructor(name: string, status: boolean) {
    this.name = name;
    this.status = status;
  }

  // constructor(private name: string, private status: boolean) {}
}
