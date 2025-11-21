import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { createCurso } from "../../services/cursos";
import { router } from "expo-router";

export default function CreateCurso() {
  const [nome, setNome] = useState("");

  async function save() {
    await createCurso({ nome });
    router.back();
  }

  return (
    <View className="flex-1 p-6 bg-white">
      <Text className="text-3xl font-bold text-primary mb-6">Novo Curso</Text>

      <TextInput
        placeholder="Nome do curso"
        className="border border-gray-300 rounded-xl px-4 py-3 mb-6"
        onChangeText={setNome}
      />

      <TouchableOpacity className="bg-primary py-3 rounded-xl" onPress={save}>
        <Text className="text-center text-white font-semibold text-lg">
          Salvar
        </Text>
      </TouchableOpacity>
    </View>
  );
}
