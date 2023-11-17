import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, TextInput, View } from 'react-native';
import { FC, useState } from 'react';
import { TTodoItem } from '../../types';

type AddTodoProps = {
  add: (todo: TTodoItem) => void;
};

export const AddTodo: FC<AddTodoProps> = ({ add }) => {
  const [inputValue, setInputValue] = useState('');

  const handleAddClick = () => {
    if (!inputValue) return;

    const newTodo: TTodoItem = {
      id: new Date().toISOString(),
      title: inputValue,
      completed: false,
    };

    add(newTodo);
    setInputValue('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={inputValue}
        onChangeText={(text) => setInputValue(text)}
      />
      <Button title='Add' onPress={handleAddClick} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
  },
  input: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'black',
    padding: 10,
    borderRadius: 5,
  },
});
