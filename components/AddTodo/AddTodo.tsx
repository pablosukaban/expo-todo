import { observer } from "mobx-react";
import { FC, useState } from "react";
import { Text, StyleSheet, TextInput, View, Pressable } from "react-native";
import React from "react";

import { useStore } from "../../store";
import { TTodoItem } from "../../types";

export const AddTodo: FC = observer(() => {
  const [inputValue, setInputValue] = useState("");

  const { add } = useStore();

  const handleAddClick = () => {
    if (!inputValue) return;

    const newTodo: TTodoItem = {
      id: new Date().toISOString(),
      title: inputValue,
      completed: false,
    };

    add(newTodo);
    setInputValue("");
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={inputValue}
        onChangeText={(text) => setInputValue(text)}
        placeholder="Add new todo"
        placeholderTextColor="gray"
        autoCapitalize="sentences"
        autoCorrect={false}
        clearButtonMode="always"
        returnKeyType="done"
        onSubmitEditing={handleAddClick}
        selectTextOnFocus
      />
      <Pressable
        style={styles.button}
        onPress={handleAddClick}
        hitSlop={10}
        accessibilityRole="button"
      >
        <Text style={styles.buttonText}>Add</Text>
      </Pressable>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 5,
  },
  input: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "black",
    padding: 10,
    borderRadius: 5,
    width: "100%",

    fontSize: 18,
  },
  button: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: "rgb(0, 150, 136)",
    textAlign: "center",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    textTransform: "uppercase",
    fontSize: 18,
  },
});
