import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import CheckBox from 'expo-checkbox';
import { FC, useState } from 'react';
import { TTodoItem } from '../../types';

type TodoItemProps = {
  task: TTodoItem;
};

export const TodoItem: FC<TodoItemProps> = ({ task }) => {
  const [value, setValue] = useState(task.completed ?? false);

  return (
    <View style={styles.todoItem}>
      <CheckBox value={value} onChange={() => setValue((prev) => !prev)} />
      <Text>{task.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  todoItem: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 30,
  },
});
