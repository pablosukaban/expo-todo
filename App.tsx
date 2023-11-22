import { StatusBar } from "expo-status-bar";
import { observer } from "mobx-react";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import { SearchTodo } from "./components/SearchTodo";
import { TodoList } from "./components/TodoList/";
import { Provider, TodoStore } from "./store";

function App() {
  const [todoStore] = useState(() => new TodoStore());

  const { isLoading } = todoStore;

  return (
    <Provider value={todoStore}>
      <View style={styles.container}>
        <SearchTodo />
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
