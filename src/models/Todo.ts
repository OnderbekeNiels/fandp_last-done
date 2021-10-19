export default interface Todo {
  uuid?: string;
  title: string;
  routineId: string;
  icon: string;
  color: string;
  createdAt: Date;
  updateAt?: Date;
}