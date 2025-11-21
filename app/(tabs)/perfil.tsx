import { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { AuthContext } from "../../context/AuthContext";
import { router } from "expo-router";

export default function Perfil() {
  const { logout, user } = useContext(AuthContext);

  return (
    <View className="flex-1 p-6 bg-white">
      <Text className="text-3xl font-bold text-primary mb-6">Meu Perfil</Text>

      <Text className="text-lg text-gray-700 mb-2">
        Nome: {user?.nome ?? "Usuário"}
      </Text>

      <Text className="text-lg text-gray-700 mb-6">
        Email: {user?.email ?? "email"}
      </Text>

      <TouchableOpacity
        className="bg-accent py-3 rounded-xl mb-4"
        onPress={() => router.push("/sobre")}
      >
        <Text className="text-center font-semibold text-black text-lg">
          Sobre o App
        </Text>
      </TouchableOpacity>

      <TouchableOpacity className="bg-red-600 py-3 rounded-xl" onPress={logout}>
        <Text className="text-center text-white text-lg font-semibold">
          Sair
        </Text>
      </TouchableOpacity>
    </View>
  );
}
