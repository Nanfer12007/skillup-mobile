import { useState, useContext } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Link, router } from "expo-router";
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
    <View className="flex-1 bg-white px-8 justify-center">
      <Text className="text-4xl font-extrabold text-primary text-center mb-12">
        SkillUp
      </Text>

      <Text className="mb-1 text-gray-700">Email</Text>
      <TextInput
        placeholder="seuemail@gmail.com"
        className="border border-gray-300 rounded-xl px-4 py-3 mb-5 text-gray-800"
        onChangeText={setEmail}
      />

      <Text className="mb-1 text-gray-700">Senha</Text>
      <TextInput
        placeholder="********"
        secureTextEntry
        className="border border-gray-300 rounded-xl px-4 py-3 mb-6 text-gray-800"
        onChangeText={setSenha}
      />

      <TouchableOpacity
        className="bg-primary py-3 rounded-2xl mb-4"
        onPress={handleLogin}
      >
        <Text className="text-center text-white text-lg font-semibold">
          Entrar
        </Text>
      </TouchableOpacity>

      <Text className="text-center text-gray-600 mt-2">
        Não tem conta?{" "}
        <Link href="/(auth)/signup" className="text-primary font-medium">
          Criar conta
        </Link>
      </Text>
    </View>
  );
}
