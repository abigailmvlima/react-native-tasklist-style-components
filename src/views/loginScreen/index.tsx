import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { apiClient } from "@/src/api";
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";

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
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Tarefas</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#546b6d"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        placeholderTextColor="#546b6d"
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={handleLogin}
        disabled={loading}
      >
        <Text style={styles.buttonText}>
          {loading ? "Loading..." : "Login"}
        </Text>
      </TouchableOpacity>
      <Text style={styles.orText}>ou</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Register")}>
        <Text style={styles.linkText}>Cadastre-se</Text>
      </TouchableOpacity>
    </View>
  );
}
