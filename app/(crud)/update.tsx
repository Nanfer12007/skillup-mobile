import { useState, useEffect } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { router, useLocalSearchParams } from "expo-router";
import { getCursos, updateCurso, deleteCurso } from "../../services/cursos";

export default function UpdateCurso() {
  const { id } = useLocalSearchParams();
  const [nome, setNome] = useState("");

  useEffect(() => {
    async function load() {
      const r = await getCursos();
      const curso = r.data.find((c) => c.id == id);
      setNome(curso.nome);
    }
    load();
  }, []);

  async function salvar() {
    await updateCurso(id, { nome });
    router.back();
  }

  async function excluir() {
    Alert.alert("Confirmar", "Deseja excluir este curso?", [
      { text: "Cancelar" },
      { text: "Excluir", style: "destructive", onPress: async () => {
          await deleteCurso(id);
          router.back();
        }}
    ]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Editar Curso</Text>

      <Input value={nome} onChangeText={setNome} />

      <Button title="Salvar" onPress={salvar} />
      <Button title="Excluir" color="#dc2626" onPress={excluir} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, backgroundColor: "#fff" },
  title: { fontSize: 28, fontWeight: "700", color: "#2563eb", marginBottom: 20 },
});
