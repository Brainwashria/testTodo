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
            switch(this.type) {
                case 'completed':
                    className = 'completed-todo';
                    break;
                case 'in progress':
                    className = 'in-progress-todo';
                    break;
                case 'all':
                    className = 'all-todos'
                    break;
            }
            if(this.type === this.status) {
                className += ' active'
            }
            return className;
        }
    }
})

</script>

<style scoped lang="scss">
    .todo {
        cursor: pointer;
        margin-right: 20px;
        border-radius: 10px;
        padding: 10px;
        font-weight: bold;
        &:hover {
            opacity: 0.7;
        }
    }
    .completed-todo {
        background-color: #8dad8d;
    }
    .in-progress-todo {
        background-color: #8a8ade;
    }
    .all-todos {
        background-color: #8f8f8f;
    }
    .active {
        border: 2px solid black;
    }
</style>