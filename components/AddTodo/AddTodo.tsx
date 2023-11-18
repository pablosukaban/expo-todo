import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, TextInput, View } from 'react-native';
import { FC, useState } from 'react';
import { TTodoItem } from '../../types';
import { useStore } from '../../store';
import { observer } from 'mobx-react';

export const AddTodo: FC = observer(() => {
  const [inputValue, setInputValue] = useState('');

  const { add } = useStore();

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
});

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    gap: 5,
  },
  input: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'black',
    padding: 10,
    borderRadius: 5,
    width: '100%',
  },
});
