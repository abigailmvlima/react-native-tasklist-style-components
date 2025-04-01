// index.tsx
import React, { useState } from "react";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { apiClient } from "@/src/api";
import { Ionicons } from "@expo/vector-icons";
import {
  Container,
  Title,
  Input,
  Button,
  ButtonText,
  ArrowBack,
} from "./styles";

export function RegisterScreen() {
  const navigation = useNavigation<any>();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = async () => {
    if (
      !name.trim() ||
      !email.trim() ||
      !password.trim() ||
      !confirmPassword.trim()
    ) {
      Alert.alert("Error", "All fields are required");
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match");
      return;
    }

    try {
      await apiClient.register(name, email, password);
      Alert.alert("Success", "Account created successfully");
      navigation.navigate("Login");
    } catch (error: any) {
      console.log("REGISTER ERROR:", error.message);
      console.log("FULL ERROR:", error.toJSON?.() || error);
      Alert.alert("Error", "Failed to register user");
    }
  };

  return (
    <Container>
      <ArrowBack onPress={() => navigation.navigate("Login")}>
        <Ionicons name="arrow-back" size={24} color="#0d424e" />
      </ArrowBack>

      <Title>Cadastro</Title>

      <Input
        placeholder="Nome"
        placeholderTextColor="#37515692"
        value={name}
        onChangeText={setName}
      />

      <Input
        placeholder="Email"
        placeholderTextColor="#37515692"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Input
        placeholder="Senha"
        placeholderTextColor="#37515692"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Input
        placeholder="Confirmar Senha"
        placeholderTextColor="#37515692"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      <Button onPress={handleRegister}>
        <ButtonText>Cadastrar</ButtonText>
      </Button>
    </Container>
  );
}
