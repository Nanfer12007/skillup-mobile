import { View, Text, TouchableOpacity } from "react-native";
import { router } from "expo-router";

export default function Home() {
  return (
    <View className="flex-1 bg-white p-6">
      <Text className="text-3xl font-bold text-primary mb-8">
        Bem-vindo ao SkillUp!
      </Text>

      <TouchableOpacity
        onPress={() => router.push("/(tabs)/cursos")}
        className="bg-primary rounded-2xl p-5 mb-4 shadow"
      >
        <Text className="text-white text-lg font-semibold">
          Explorar Cursos
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => router.push("/crud/list")}
        className="bg-secondary rounded-2xl p-5 mb-4 shadow"
      >
        <Text className="text-white text-lg font-semibold">
          Minhas Trilhas (CRUD)
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => router.push("/sobre")}
        className="bg-accent rounded-2xl p-5 shadow"
      >
        <Text className="text-black text-lg font-semibold">
          Sobre o App
        </Text>
      </TouchableOpacity>
    </View>
  );
}
