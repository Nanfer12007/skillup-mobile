import { useContext, useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { AuthContext } from "../../context/AuthContext";
import { Link, router } from "expo-router";

export default function Login() {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  async function handleLogin() {
    await login(email, senha);
    router.replace("/(tabs)/home");
  }

  return (
    <View style={{ padding: 30 }}>
      <Text style={{ fontSize: 26 }}>SkillUp</Text>
      <TextInput placeholder="Email" onChangeText={setEmail}/>
      <TextInput placeholder="Senha" secureTextEntry onChangeText={setSenha}/>
      <TouchableOpacity onPress={handleLogin}>
        <Text>Entrar</Text>
      </TouchableOpacity>

      <Link href="/(auth)/signup">Criar conta</Link>
    </View>
  );
}
