import { View, Text, TextInput, TouchableOpacity } from "react-native";

export default function Signup() {
  return (
    <View style={{ padding: 30 }}>
      <Text style={{ fontSize: 26 }}>Criar conta</Text>

      <TextInput placeholder="Nome" />
      <TextInput placeholder="Email" />
      <TextInput placeholder="Senha" secureTextEntry />

      <TouchableOpacity>
        <Text>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}
