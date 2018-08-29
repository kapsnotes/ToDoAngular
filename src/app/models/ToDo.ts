import { Category } from './Category';

export class ToDo {
  id: number;
  name: string;
  status: boolean;
  category: Category;

  constructor(id: number, name: string, status: boolean, category: Category) {
    this.id = id;
    this.name = name;
    this.status = status;
    this.category = category;
  }

  getId() {
    return this.id;
  }

  // constructor(private name: string, private status: boolean) {}
}
