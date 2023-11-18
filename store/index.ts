import { makeAutoObservable, runInAction } from 'mobx';
import { TTodoItem } from '../types';
import axios from 'axios';
import { createProviderAndStore } from '../hooks/createProviderAndStore';

const URL = 'https://jsonplaceholder.typicode.com/todos';

export class TodoStore {
  todoList: TTodoItem[] | null = null;
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
          _limit: 10,
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
        this.error = 'Something went wrong';
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
}

export const { Provider, useStore } = createProviderAndStore(TodoStore);
