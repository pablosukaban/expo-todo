import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { todoTasks } from './constants';
import CheckBox from 'expo-checkbox';
import { FC, useState } from 'react';
import { TTodoItem } from './types';
import { TodoItem } from './components/TaskItem';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Todo App</Text>
      <View style={styles.todoList}>
        {todoTasks.map((task) => (
          <TodoItem key={task.id} task={task} />
        ))}
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
    height: '100%',
  },
});
