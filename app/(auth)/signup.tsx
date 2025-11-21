import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { router } from "expo-router";

export default function Signup() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function cadastrar() {
    router.replace("/(auth)/login");
  }

  return (
    <View className="flex-1 bg-white px-8 justify-center">
      <Text className="text-3xl font-bold text-primary text-center mb-10">
        Criar Conta
      </Text>

      <TextInput
        placeholder="Nome completo"
        className="border border-gray-300 rounded-xl px-4 py-3 mb-4"
        onChangeText={setNome}
      />

      <TextInput
        placeholder="Email"
        className="border border-gray-300 rounded-xl px-4 py-3 mb-4"
        onChangeText={setEmail}
      />

      <TextInput
        placeholder="Senha"
        secureTextEntry
        className="border border-gray-300 rounded-xl px-4 py-3 mb-6"
        onChangeText={setSenha}
      />

      <TouchableOpacity className="bg-primary py-3 rounded-2xl" onPress={cadastrar}>
        <Text className="text-center text-white text-lg font-semibold">Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}
