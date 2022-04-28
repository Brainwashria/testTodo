import { TTodo } from '@/components/TodoItem/type'

export default function filterTodos(status: string, todos: TTodo[]) {
  const filteredTodos = todos;
  switch (status) {
    case 'active':
      return filteredTodos.filter((todo) => !todo.checked);
    case 'completed':
      return filteredTodos.filter((todo) => todo.checked);
    default:
      return filteredTodos;
  }
}