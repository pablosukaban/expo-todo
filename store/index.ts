import { makeAutoObservable, runInAction } from "mobx";
import axios from "axios";

import { TTodoItem } from "../types";
import { createProviderAndStore } from "../hooks/createProviderAndStore";

const URL = "https://jsonplaceholder.typicode.com/todos";

export class TodoStore {
  todoList: TTodoItem[] | null = null;
  query = "";
  error: string | null = null;
  isLoading = false;

  constructor() {
    makeAutoObservable(this);

    this.init();
  }

  private init = async () => {
    this.getData();
  };

  private getData = async () => {
    this.isLoading = true;

    try {
      const { data } = await axios.get(URL, {
        params: {
          _limit: 50,
        },
      });

      if (!data) {
        throw new Error();
      }

      runInAction(() => {
        this.todoList = data;
        this.isLoading = false;
      });
    } catch (error) {
      runInAction(() => {
        this.error = "Something went wrong";
        this.isLoading = false;
      });
    }
  };

  toggleTodoComplete = (id: string) => {
    const foundTodo = this.todoList?.find((todo) => todo.id === id);

    if (!foundTodo) return;

    const newTodoList = this.todoList?.map((item) => {
      if (item.id !== foundTodo.id) return item;
      return {
        ...item,
        completed: !item.completed,
      };
    });

    this.todoList = newTodoList;
  };

  add = (todo: TTodoItem) => {
    if (!this.todoList) return;

    this.todoList = [todo, ...this.todoList];
  };

  setQuery = (query: string) => {
    this.query = query;
  };

  get filteredTodoList() {
    if (!this.todoList) return [];

    return this.todoList.filter((todo) => {
      const title = todo.title.toLowerCase();
      const query = this.query.toLowerCase();

      return title.includes(query);
    });
  }

  // filterByQuery = (searchQuery: string) => {
  //   if (!this.todoList) return;

  //   if (!searchQuery) {
  //     this.todoList = null;
  //     return;
  //   }

  //   this.todoList = this.todoList.filter((todo) => {
  //     const title = todo.title.toLowerCase();
  //     const query = searchQuery.toLowerCase();

  //     return title.includes(query);
  //   });
  // };
}

export const { Provider, useStore } = createProviderAndStore(TodoStore);
