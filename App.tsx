import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { data } from './constants';
import { FC, useEffect, useState } from 'react';
import { TodoItem } from './components/TaskItem';
import { TTodoItem } from './types';
import { AddTodo } from './components/AddTodo/AddTodo';
import { TodoStore } from './store';
import { observer } from 'mobx-react';

function App() {
  const [todoStore] = useState(() => new TodoStore());

  const { todoList, isLoading, error, toggleTodoComplete, add } = todoStore;

  return (
    <View style={styles.container}>
      <Text>Todo App</Text>
      <AddTodo add={add} />
      <View style={styles.todoList}>
        {!isLoading ? (
          <>
            {todoList?.map((todo, idx) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                index={idx + 1}
                toggleTodo={() => toggleTodoComplete(todo.id)}
              />
            ))}
          </>
        ) : (
          <Text>Loading...</Text>
        )}
      </View>
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

export default observer(App);
