import { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { getCursos } from "../../services/cursos";
import { router } from "expo-router";

export default function Cursos() {
  const [cursos, setCursos] = useState([]);

  async function load() {
    const r = await getCursos();
    setCursos(r.data);
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <ScrollView className="flex-1 bg-white p-6">
      <Text className="text-2xl font-bold text-primary mb-6">
        Cursos Disponíveis
      </Text>

      <TouchableOpacity
        className="bg-primary mb-6 py-3 rounded-xl"
        onPress={() => router.push("/crud/create")}
      >
        <Text className="text-center text-white font-semibold text-lg">
          Novo Curso +
        </Text>
      </TouchableOpacity>

      {cursos.map((item) => (
        <TouchableOpacity
          key={item.id}
          className="bg-gray-100 p-4 mb-3 rounded-xl border border-gray-300"
          onPress={() => router.push(`/crud/update?id=${item.id}`)}
        >
          <Text className="text-lg font-semibold text-gray-800">
            {item.nome}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}
