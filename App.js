import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { todoTasks } from './constants';
import CheckBox from 'expo-checkbox';
import { useState } from 'react';

const TodoItem = ({ task }) => {
  const [value, setValue] = useState(task.completed ?? false);

  return (
    <View style={styles.todoItem}>
      <CheckBox value={value} onChange={() => setValue((prev) => !prev)} />
      <Text>{task.title}</Text>
    </View>
  );
};

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
    // justifyContent: 'space-between',
    padding: 20,
    margin: 20,
    gap: 20,
    border: '1px solid black',
  },
  todoList: {
    // width: '100%',
    height: '100%',
  },
  todoItem: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 30,
  },
});
