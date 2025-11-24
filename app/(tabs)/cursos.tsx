import { useEffect, useState } from "react";
import { ScrollView, Text, StyleSheet } from "react-native";
import Button from "../../components/Button";
import Card from "../../components/Card";
import { getCursos } from "../../services/cursos";
import { router } from "expo-router";

export default function Cursos() {
  const [cursos, setCursos] = useState([]);

  useEffect(() => {
    async function load() {
      const r = await getCursos();
      setCursos(r.data);
    }
    load();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Cursos Disponíveis</Text>

      <Button title="Novo Curso +" onPress={() => router.push("/(crud)/create")} />

      {cursos.map((item) => (
        <Card key={item.id}>
          <Text
            style={styles.course}
            onPress={() => router.push(`/(crud)/update?id=${item.id}`)}
          >
            {item.nome}
          </Text>
        </Card>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, backgroundColor: "#fff" },
  title: { fontSize: 26, fontWeight: "700", color: "#2563eb", marginBottom: 20 },
  course: { fontSize: 18, fontWeight: "600", color: "#333" },
});
