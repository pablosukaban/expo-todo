import { StyleSheet, Text, View } from 'react-native';
import CheckBox from 'expo-checkbox';
import { FC } from 'react';
import { TTodoItem } from '../../types';

type TodoItemProps = {
  index: number;
  todo: TTodoItem;
  toggleTodo: (id: string) => void;
};

export const TodoItem: FC<TodoItemProps> = ({ todo, toggleTodo, index }) => {
  return (
    <View style={styles.todoItem}>
      <Text>{index}.</Text>
      <CheckBox value={todo.completed} onChange={() => toggleTodo(todo.id)} />
      <Text>{todo.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  todoItem: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 30,
    flex: 1,
  },
});
