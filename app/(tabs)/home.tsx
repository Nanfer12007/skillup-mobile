import { View, Text, StyleSheet } from "react-native";
import { router } from "expo-router";
import Button from "../../components/Button";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao SkillUp!</Text>

      <Button title="Explorar Cursos" onPress={() => router.push("/(tabs)/cursos")} />
      <Button title="Minhas Trilhas (CRUD)" color="#16a34a" onPress={() => router.push("/(crud)/create")} />
      <Button title="Sobre o App" color="#fbbf24" onPress={() => router.push("/sobre")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, backgroundColor: "#fff" },
  title: { fontSize: 28, fontWeight: "700", color: "#2563eb", marginBottom: 30 },
});
