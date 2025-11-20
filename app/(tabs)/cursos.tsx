import { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { getCursos } from "../../services/cursos";
import { router } from "expo-router";

export default function Cursos() {
  const [data, setData] = useState([]);

  async function load() {
    const response = await getCursos();
    setData(response.data);
  }

  useEffect(() => { load(); }, []);

  return (
    <View style={{ padding: 20 }}>
      <TouchableOpacity onPress={() => router.push("/crud/create")}>
        <Text>Novo Curso</Text>
      </TouchableOpacity>

      {data.map((item) => (
        <TouchableOpacity
          key={item.id}
          onPress={() => router.push(`/crud/update?id=${item.id}`)}
        >
          <Text>{item.nome}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
