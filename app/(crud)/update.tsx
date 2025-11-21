import { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import { getCursos, updateCurso, deleteCurso } from "../../services/cursos";

export default function UpdateCurso() {
  const { id } = useLocalSearchParams();
  const [nome, setNome] = useState("");

  useEffect(() => {
    (async () => {
      const r = await getCursos();
      const item = r.data.find((c) => c.id == id);
      setNome(item.nome);
    })();
  }, []);

  async function salvar() {
    await updateCurso(id, { nome });
    router.back();
  }

  async function excluir() {
    Alert.alert("Confirmar", "Deseja realmente excluir?", [
      { text: "Cancelar" },
      {
        text: "Excluir",
        onPress: async () => {
          await deleteCurso(id);
          router.back();
        },
      },
    ]);
  }

  return (
    <View className="flex-1 p-6 bg-white">
      <Text className="text-3xl font-bold text-primary mb-6">
        Editar Curso
      </Text>

      <TextInput
        value={nome}
        onChangeText={setNome}
        className="border border-gray-300 rounded-xl px-4 py-3 mb-6"
      />

      <TouchableOpacity className="bg-primary py-3 rounded-xl mb-3" onPress={salvar}>
        <Text className="text-center text-white font-semibold text-lg">
          Salvar
        </Text>
      </TouchableOpacity>

      <TouchableOpacity className="bg-red-600 py-3 rounded-xl" onPress={excluir}>
        <Text className="text-center text-white font-semibold text-lg">
          Excluir
        </Text>
      </TouchableOpacity>
    </View>
  );
}
