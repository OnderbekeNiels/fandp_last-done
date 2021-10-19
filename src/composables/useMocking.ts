import Routine from "../models/Routine"
import Todo from "../models/Todo"

const routines: Routine[] = [
    {
        uuid: "1234",
        title: 'Morning routine',
        numberOfTodos: 1,
    }
]
// const todos: Todo[] = [{
//     uuid: '1',
//     title: "Mock todo",
//     routineId: "123",
//     icon: "Activity",
//     color: "bg-alpha",
//     updateAt: new Date()
// }]

const queries = {
    'getRoutineById': (id: string) =>{
        return routines[0]
    }
}

export default () =>{
    const query = (name: string, query: string, variables?: Object) =>{
        // todo return promise
        // @ts-ignore
        return queries[name](variables);
    }
    return{
        query
    }
}