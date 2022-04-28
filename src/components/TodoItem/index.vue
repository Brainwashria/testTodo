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
  font-weight: bold;
  text-align: start;
}
.complete {
    text-decoration: line-through;
}
</style>