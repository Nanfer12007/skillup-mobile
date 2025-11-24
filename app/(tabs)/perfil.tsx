import { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import Button from "../../components/Button";
import { router } from "expo-router";
import { AuthContext } from "../../context/AuthContext";

export default function Perfil() {
  const { logout, user } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meu Perfil</Text>

      <Text style={styles.info}>Nome: {user?.nome ?? "Usuário"}</Text>
      <Text style={styles.info}>Email: {user?.email ?? "email"}</Text>

      <Button title="Sobre o App" color="#fbbf24" onPress={() => router.push("/sobre")} />

      <Button title="Sair" color="#dc2626" onPress={logout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, backgroundColor: "#fff" },
  title: { fontSize: 28, fontWeight: "700", color: "#2563eb", marginBottom: 20 },
  info: { fontSize: 18, marginBottom: 10 },
});
