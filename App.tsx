import { StatusBar } from 'expo-status-bar';
import { observer } from 'mobx-react';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AddTodo } from './components/AddTodo/AddTodo';
import { TodoList } from './components/TodoList/';
import { Provider, TodoStore } from './store';

function App() {
  const [todoStore] = useState(() => new TodoStore());

  const { isLoading, add } = todoStore;

  return (
    <Provider value={todoStore}>
      <View style={styles.container}>
        <Text>Todo App</Text>
        <AddTodo add={add} />
        {!isLoading ? <TodoList /> : <Text>Loading...</Text>}
        <StatusBar style='auto' />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 50,
    // margin: 20,
    gap: 20,
    border: '1px solid black',
  },
});

export default observer(App);
