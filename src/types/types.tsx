export interface IAddress {
  street: string;
  city: string;
  zipcode: string;
}

export interface IUser {
  id: number;
  name: string;
  email: string;
  address: IAddress;
}

export interface ITodo {
  id: number;
  title: string;
  completed: boolean;
}

export type ToggleTodo = (selectedTodo: ITodo) => void;

export type AddTodo = (title: string) => void;
