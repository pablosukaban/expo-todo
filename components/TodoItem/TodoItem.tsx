import { StyleSheet, Text, View } from "react-native";
import CheckBox from "expo-checkbox";
import { FC } from "react";
import React from "react";

import { TTodoItem } from "../../types";

type TodoItemProps = {
  index: number;
  todo: TTodoItem;
  toggleTodo: (id: string) => void;
};

export const TodoItem: FC<TodoItemProps> = ({ todo, toggleTodo, index }) => {
  return (
    <View style={styles.todoItem}>
      <CheckBox
        value={todo.completed}
        onValueChange={() => toggleTodo(todo.id)}
      />
      <Text
        style={[
          styles.todoText,
          todo.completed ? styles.todoTextCompleted : undefined,
        ]}
      >
        {index}. {todo.title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  todoItem: {
    alignItems: "center",
    flexDirection: "row",
    gap: 30,
  },
  todoText: {
    fontSize: 20,
    color: "black",
  },
  todoTextCompleted: {
    textDecorationLine: "line-through",
    color: "gray",
  },
});
