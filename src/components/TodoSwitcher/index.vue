<template>
  <span
    class="todo"
    :class="styleColor"
    @click="$emit('filter', type)"
  >{{ type }}</span>
</template>

<script>
import {defineComponent} from "vue";
export default defineComponent({
    name: "TodoSwitcher",
    props: {
        type: {
            type: String,
            default: 'all'
        },
        status: {
            type: String,
            default: 'all'
        }
    },
    emits: ['filter'],
    computed: {
        styleColor() {
            let className = ''
            if(this.type === this.status) {
                className = 'active'
            }
            return className;
        }
    }
})

</script>

<style scoped lang="scss">
    .todo {
      font-size: 14px;
      cursor: pointer;
      margin-right: 20px;
      border-radius: 3px;
      padding: 5px;
      &:hover {
        opacity: 0.7;
      }
    }
    .active {
      border: 1px solid #bdbdbd;
    }
</style>