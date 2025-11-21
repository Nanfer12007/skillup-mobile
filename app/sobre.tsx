import { View, Text } from "react-native";

export default function Sobre() {
  return (
    <View className="flex-1 p-6 bg-white">
      <Text className="text-3xl font-bold text-primary mb-6">Sobre o SkillUp</Text>

      <Text className="text-gray-800 text-lg mb-3">
        Plataforma de Requalificação Profissional com IA.
      </Text>

      <Text className="text-gray-600 text-md mb-1">
        ODS 4 — Educação de Qualidade
      </Text>
      <Text className="text-gray-600 text-md mb-4">
        ODS 8 — Trabalho Decente e Crescimento Econômico
      </Text>

      <Text className="text-gray-500 text-sm mt-10">
        Versão: 1.0.0
      </Text>

      <Text className="text-gray-500 text-sm">
        Commit: f21c9a2
      </Text>
    </View>
  );
}
