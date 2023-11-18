import { observer } from "mobx-react";
import { StyleSheet, View } from "react-native";
import React from "react";

import { useStore } from "../../store";
import { TodoItem } from "../TodoItem";


export const TodoList = observer(() => {
  const { todoList, toggleTodoComplete } = useStore();

  return (
    <View style={styles.todoList}>
      {todoList?.map((todo, idx) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          index={idx + 1}
          toggleTodo={() => toggleTodoComplete(todo.id)}
        />
      ))}
    </View>
  );
});

const styles = StyleSheet.create({
  todoList: {
    gap: 10,
  },
});
