import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { createCurso } from "../../services/cursos";
import { router } from "expo-router";

export default function CreateCurso() {
  const [nome, setNome] = useState("");

  async function save() {
    await createCurso({ nome });
    router.back();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Novo Curso</Text>

      <Input placeholder="Nome do curso" onChangeText={setNome} />

      <Button title="Salvar" onPress={save} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, backgroundColor: "#fff" },
  title: { fontSize: 28, fontWeight: "700", color: "#2563eb", marginBottom: 20 },
});
