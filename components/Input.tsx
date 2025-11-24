import { TextInput, StyleSheet } from "react-native";

export default function Input(props) {
  return (
    <TextInput
      {...props}
      style={styles.input}
      placeholderTextColor="#888"
    />
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
    marginBottom: 12,
  },
});
