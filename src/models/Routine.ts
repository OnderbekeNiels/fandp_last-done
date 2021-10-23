import Todo from "./Todo";

export default interface Routine {
  uuid?: string;
  slug?: string;
  title: string;
  color?: string;
  icon?: string;
  numberOfTodos: number;
  createdAt?: Date;
  updatedAt?: Date;
}
