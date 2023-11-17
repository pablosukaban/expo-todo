import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { data } from './constants';
import { FC, useEffect, useState } from 'react';
import { TodoItem } from './components/TaskItem';
import { TTodoItem } from './types';
import { AddTodo } from './components/AddTodo/AddTodo';

export default function App() {
  const [todoList, setTodoList] = useState<TTodoItem[]>([]);

  useEffect(() => {
    const getTodos = () => {
      fetch('https://jsonplaceholder.typicode.com/todos')
        .then((response) => response.json())
        .then((data) => setTodoList(data));
    };

    getTodos();
  }, []);

  const toggleTodoComplete = (id: string) => {
    const foundTodo = todoList.find((todo) => todo.id === id);

    if (!foundTodo) return;

    const newTodoList = todoList.map((item) => {
      if (item.id !== foundTodo.id) return item;
      return {
        ...item,
        completed: !item.completed,
      };
    });

    setTodoList(newTodoList);
  };

  const add = (todo: TTodoItem) => {
    setTodoList((prev) => [todo, ...prev]);
  };

  return (
    <View style={styles.container}>
      <Text>Todo App</Text>
      <AddTodo add={add} />
      {todoList.length ? (
        <View style={styles.todoList}>
          {todoList.map((todo, idx) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              index={idx + 1}
              toggleTodo={() => toggleTodoComplete(todo.id)}
            />
          ))}
        </View>
      ) : null}
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 20,
    margin: 20,
    gap: 20,
    border: '1px solid black',
  },
  todoList: {
    display: 'flex',
    gap: 10,
  },
});
