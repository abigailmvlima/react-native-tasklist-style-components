// index.tsx
import React, { useState } from "react";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { apiClient } from "@/src/api";
import {
  Container,
  Title,
  Input,
  Button,
  ButtonText,
  OrText,
  LinkText,
} from "./styles";

export function LoginScreen() {
  const navigation = useNavigation<any>();
  const [email, setEmail] = useState("davi@email.com");
  const [password, setPassword] = useState("123456");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Please enter email and password");
      return;
    }
    setLoading(true);
    try {
      const response = await apiClient.login(email, password);
      navigation.navigate("TaskList");
    } catch (error) {
      Alert.alert("Login Failed", "Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Title>Lista de Tarefas</Title>

      <Input
        placeholder="Email"
        placeholderTextColor="#546b6d"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Input
        placeholder="Password"
        secureTextEntry
        placeholderTextColor="#546b6d"
        value={password}
        onChangeText={setPassword}
      />

      <Button onPress={handleLogin} disabled={loading}>
        <ButtonText>{loading ? "Loading..." : "Login"}</ButtonText>
      </Button>

      <OrText>ou</OrText>

      <LinkText onPress={() => navigation.navigate("Register")}>
        Cadastre-se
      </LinkText>
    </Container>
  );
}
