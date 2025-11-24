import { useState, useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Link, router } from "expo-router";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { AuthContext } from "../../context/AuthContext";

export default function Login() {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  async function handleLogin() {
    await login(email, senha);
    router.replace("/(tabs)/home");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>SkillUp</Text>

      <Input placeholder="Email" onChangeText={setEmail} />
      <Input placeholder="Senha" secureTextEntry onChangeText={setSenha} />

      <Button title="Entrar" onPress={handleLogin} />

      <TouchableOpacity>
        <Text style={styles.linkText}>
          Não tem conta?
          <Link href="/(auth)/signup" style={styles.link}> Criar conta</Link>
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  logo: {
    fontSize: 40,
    fontWeight: "800",
    color: "#2563eb",
    textAlign: "center",
    marginBottom: 40,
  },
  linkText: {
    textAlign: "center",
    marginTop: 10,
    fontSize: 16,
  },
  link: {
    color: "#2563eb",
    fontWeight: "600",
  },
});
