<template>
  <div class="container">
    <div class="columns">
      <div class="column col-10">
        <h1 class="text-center">Todos</h1>
        <div class="todo-input-wrapper">
          <input
            class="form-input"
            type="text"
            v-model="todoItemName"
            placeholder="I have to..."
            @keyup.enter.prevent="addTodo"
          >
          <button class="btn" @click.prevent="addTodo">Add Todo</button>
        </div>
        <div class="todos">
          <ul>
            <li
              class="todo-item"
              v-for="todo in todos" :key="todo.id"
              @click="deleteTodo(todo)"
            >{{todo.name}}</li>
          </ul>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import { mapState } from "vuex";

  export default {
    data() {
      return {
        todoItemName: "",
      };
    },
    methods: {
      addTodo() {
        this.$store.dispatch("ADD_TODO", this.todoItemName);

        this.todoItemName = "";
      },
      deleteTodo(selectedTodo) {
        this.$store.dispatch("DELETE_TODO", selectedTodo.id);
      }
    },
    computed: {
      ...mapState({
        todos: state => state.Todo.todos
      })
    }
  };
</script>

<style>
  .col-10 {
      margin: auto;
  }

  body {
    font: caption;
  }
  .todo-item {
      background: none;
      padding: 0.5rem;
      margin: 0;
      cursor: pointer;
      font-size: 1rem;
  }

  .todo-item:nth-child(even) {
      background: #f4f4ff;
  }

  .todo-item:hover {
      background: #d8d8d8
  }

  h1 {
    margin-top: 1em;
  }

  .todo-input-wrapper {
    text-align: center;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
  }

  .form-input {
    width: auto;
    flex-grow: 1;
  }

  .form-input, .btn {
    margin-top: 0.5em;
  }
</style>
