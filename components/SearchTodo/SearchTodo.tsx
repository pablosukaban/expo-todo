import { observer } from "mobx-react";
import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { useStore } from "../../store";

export const SearchTodo = observer(() => {
  const { query, setQuery } = useStore();

  return (
    <View style={styles.container}>
      <TextInput
        value={query}
        onChangeText={setQuery}
        style={styles.input}
        placeholder="Search..."
      />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 5,
    paddingHorizontal: 10,
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
