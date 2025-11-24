import { View, Text, StyleSheet } from "react-native";

export default function Sobre() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sobre o SkillUp</Text>

      <Text style={styles.paragraph}>
        Plataforma de Requalificação Profissional com IA.
      </Text>
      <Text style={styles.paragraph}>ODS 4 — Educação de Qualidade</Text>
      <Text style={styles.paragraph}>ODS 8 — Trabalho Decente</Text>

      <Text style={styles.version}>Versão: 1.0.0</Text>
      <Text style={styles.version}>Commit: f21c9a2</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, backgroundColor: "#fff" },
  title: { fontSize: 28, fontWeight: "700", color: "#2563eb", marginBottom: 20 },
  paragraph: { fontSize: 16, marginBottom: 5 },
  version: { fontSize: 12, marginTop: 20, color: "#666" },
});
