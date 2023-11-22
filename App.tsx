import { StatusBar } from "expo-status-bar";
import { observer } from "mobx-react";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { AddTodo } from "./components/AddTodo/AddTodo";
import { TodoList } from "./components/TodoList/";
import { Provider, TodoStore } from "./store";


function App() {
  const [todoStore] = useState(() => new TodoStore());

  const { isLoading } = todoStore;

  return (
    <Provider value={todoStore}>
      <View style={styles.container}>
        {/* <Text>Todo App</Text> */}
        <AddTodo />
        {!isLoading ? <TodoList /> : <Text>Loading...</Text>}
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 50,
    gap: 20,
  },
});

export default observer(App);
