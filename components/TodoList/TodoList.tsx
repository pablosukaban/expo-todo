import { observer } from "mobx-react";
import { StyleSheet, View, ScrollView, FlatList } from "react-native";
import React from "react";

import { useStore } from "../../store";
import { TodoItem } from "../TodoItem";

export const TodoList = observer(() => {
  const { todoList, toggleTodoComplete } = useStore();

  return (
    <FlatList
      data={todoList}
      contentContainerStyle={styles.todoList}
      showsVerticalScrollIndicator={false}
      renderItem={({ item, index }) => (
        <TodoItem
          todo={item}
          index={index + 1}
          toggleTodo={() => toggleTodoComplete(item.id)}
        />
      )}
    />
  );
});

const styles = StyleSheet.create({
  todoList: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
});
