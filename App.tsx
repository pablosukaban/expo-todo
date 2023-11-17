import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { data } from './constants';
import { useState } from 'react';
import { TodoItem } from './components/TaskItem';

export default function App() {
  const [todoList, setTodoList] = useState(data ?? []);

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

  return (
    <View style={styles.container}>
      <Text>Todo App</Text>
      <View style={styles.todoList}>
        {todoList.map((task) => (
          <TodoItem
            key={task.id}
            todo={task}
            toggleTodo={() => toggleTodoComplete(task.id)}
          />
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
