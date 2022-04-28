import {createStore} from "vuex";
import createPersistedState from "vuex-persistedstate";
import {TTodo} from "@/components/TodoItem/type";

export interface State {
    counter: number
    todos: Array<TTodo>
}

export default createStore<State>({
  state: {
      counter: 1,
      todos: []
  },
    mutations: {
      clearCompleted(state) {
          state.todos = state.todos.filter((todo: TTodo) => !todo.checked)
      },
      createTodos(state, data: Omit<TTodo, 'id'>) {
          state.todos.push({
            ...data,
            id: state.counter
          });
          state.counter = state.counter + 1;
      },
      updateTodo(state, data: TTodo) {
          state.todos.map((todo: TTodo)  => {
              if(todo.id === data.id) {
                  todo.checked = !todo.checked;
              }
          })
      }
    },
    plugins: [createPersistedState()],
})