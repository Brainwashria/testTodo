<template>
  <div class="main-page">
    <h1>Todo list</h1>
    <input
      v-model="todoText"
      name="todo-input"
      @keyup.enter="addNewTodo"
    >
    <p class="main-page__counter">
      {{ filterTodos('in progress', todos).length }} todo(s) left
    </p>
    <button
      v-if="filterTodos('completed', todos).length > 0"
      class="main-page__clear-completed"
      @click="handleClear"
    >
      Clear completed
    </button>
    <div class="main-page__switcher-container">
      <todo-switcher
        v-for="switcher in todosSwitcher"
        :key="switcher"
        :type="switcher"
        :status="filterStatus"
        @filter="handleFilter"
      />
    </div>
    <div class="main-page__todos">
      <todo-item
        v-for="todo in filterTodos(filterStatus, todos)"
        :key="todo.id"
        :todo="todo"
        @update="handleUpdate"
      />
    </div>
  </div>
</template>

<script>
import {defineComponent} from "vue";
import { mapState, mapMutations } from "vuex";
import TodoItem from "@/components/TodoItem";
import TodoSwitcher from "@/components/TodoSwitcher";
import filterTodos from "@/service/index.ts";

export default defineComponent({
    name: "MainPage",
    components: {TodoSwitcher, TodoItem},
    data() {
        return {
            todoText: '',
            todosSwitcher: [
                'completed',
                'in progress',
                'all'
            ],
            filterStatus: 'all'
        }
    },
    computed: {
        ...mapState(['todos']),
    },
    methods: {
        ...mapMutations(['createTodos', 'updateTodo', 'clearCompleted']),
        filterTodos,
        handleFilter(filter) {
            this.filterStatus = filter;
        },
        handleClear() {
            this.clearCompleted();
        },
        addNewTodo() {
            let todo = {text: this.todoText, checked: false};
            this.createTodos(todo);
            this.todoText = '';
        },
        handleUpdate(data) {
            this.updateTodo(data);
        }
    }
})
</script>

<style scoped lang="scss">
.main-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    &__clear-completed {
      height: 30px;
      background: white;
      border: 1px solid black;
      border-radius: 5px;
    }
    &__counter {
      font-size: 18px;
      font-weight: bold;
    }
    &__todos {
      margin-top: 20px;
      font-size: 16px;
    }
    &__switcher-container {
      margin-top:20px;
      display: flex;
    }
}
</style>