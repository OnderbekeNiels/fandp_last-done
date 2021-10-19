import Todo from "./Todo";

export default interface Routine {
  uuid?: string;
  slug?: string;
  title: string;
  numberOfTodos: number;
  createdAt?: Date;
  updatedAt?: Date;
}
