import { useState } from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import { createCurso } from "../../services/cursos";
import { router } from "expo-router";

export default function CreateCurso() {
  const [nome, setNome] = useState("");

  async function save() {
    await createCurso({ nome });
    router.back();
  }

  return (
    <View>
      <Text>Cadastro de Curso</Text>
      <TextInput placeholder="Nome" onChangeText={setNome} />
      <TouchableOpacity onPress={save}>
        <Text>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
}
