import { useSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { updateCurso, deleteCurso, getCursos } from "../../services/cursos";
import { View, TextInput, Text, TouchableOpacity } from "react-native";
import { router } from "expo-router";

export default function UpdateCurso() {
  const params = useSearchParams();
  const id = params.id;

  const [curso, setCurso] = useState("");

  useEffect(() => {
    (async () => {
      const r = await getCursos();
      const item = r.data.find((c) => c.id == id);
      setCurso(item.nome);
    })();
  }, []);

  async function update() {
    await updateCurso(id, { nome: curso });
    router.back();
  }

  async function remove() {
    await deleteCurso(id);
    router.back();
  }

  return (
    <View>
      <Text>Editar Curso</Text>
      <TextInput value={curso} onChangeText={setCurso} />

      <TouchableOpacity onPress={update}><Text>Salvar</Text></TouchableOpacity>
      <TouchableOpacity onPress={remove}><Text>Excluir</Text></TouchableOpacity>
    </View>
  );
}
