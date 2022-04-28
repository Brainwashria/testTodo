<template>
  <div class="main-page">
    <div class="main-page__container">
      <input
        v-model="todoText"
        placeholder="What needs to be done?"
        class="main-page__input"
        name="todo-input"
        @keyup.enter="addNewTodo"
      >
      <div class="main-page__todos">
        <todo-item
          v-for="todo in filterTodos(filterStatus, todos)"
          :key="todo.id"
          :todo="todo"
          @update="handleUpdate"
        />
      </div>
      <div class="main-page__controller-container">
        <p class="main-page__counter">
          {{ filterTodos('active', todos).length }} item(s) left
        </p>
        <div class="main-page__switchers">
          <todo-switcher
            v-for="switcher in todosSwitcher"
            :key="switcher"
            :type="switcher"
            :status="filterStatus"
            @filter="handleFilter"
          />
        </div>
        <button
          v-if="filterTodos('completed', todos).length > 0"
          class="main-page__clear-completed"
          @click="handleClear"
        >
          Clear completed
        </button>
      </div>
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
              'all',
              'active',
              'completed',

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
  &__switchers {
    display: flex;
    align-items: center;
  }
  &__container {
    border: 1px solid #bdbdbd;
    border-radius: 3px;
    width: 600px;
  }
  &__input {
    background: transparent;
    outline: none;
    width: 100%;
    height: 50px;
    font-size: 18px;
    padding: 5px;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #bdbdbd;
    &::placeholder {
      font-style: italic;
      color: #bdbdbd;
    }
  }
  &__clear-completed {
    cursor: pointer;
    border: none;
    background: transparent;
    border-radius: 5px;
    font-family: Avenir, sans-serif;
    &:hover {
      opacity: 0.7;
    }
  }
  &__counter {
    font-size: 14px;
  }
  &__todos {
    box-shadow: 0px -2px 3px 0px rgb(150 150 150 / 25%);
    font-size: 16px;
  }
  &__controller-container {
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 5px;
    height: 50px;
    box-sizing: border-box;
    display: flex;
  }
}
</style>