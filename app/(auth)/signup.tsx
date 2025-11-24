import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { router } from "expo-router";
import Input from "../../components/Input";
import Button from "../../components/Button";

export default function Signup() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function cadastrar() {
    router.replace("/(auth)/login");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Criar Conta</Text>

      <Input placeholder="Nome Completo" onChangeText={setNome} />
      <Input placeholder="Email" onChangeText={setEmail} />
      <Input placeholder="Senha" secureTextEntry onChangeText={setSenha} />

      <Button title="Cadastrar" onPress={cadastrar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, justifyContent: "center", backgroundColor: "#fff" },
  title: { fontSize: 30, fontWeight: "700", color: "#2563eb", textAlign: "center", marginBottom: 30 },
});
