<template>
  <div class="todo-item">
    <input
      type="checkbox"
      :checked="todo.checked"
      @change="$emit('update', todo)"
    >
    <span :class="[todo.checked ? 'complete' : '']">{{ todo.text }}</span>
  </div>
</template>

<script lang="ts">


export default {
    name: "TodoItem",
    props: {
        todo: {
          type: Object,
          default: () => {}
        }
    },
    emits: ['update'],
}
</script>

<style scoped lang="scss">
.todo-item {
  display: flex;
  align-items: center;
  font-size: 18px;
  padding: 5px;
  background: white;
  text-align: start;
  height: 43px;
  border-bottom: 1px solid #bdbdbd;
}
.complete {
  color: #bdbdbd;
  text-decoration: line-through;
}
</style>