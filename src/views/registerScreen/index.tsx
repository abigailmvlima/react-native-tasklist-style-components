import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { apiClient } from "@/src/api";
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";

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
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.arrowBack}
        onPress={() => navigation.navigate("Login")}
      >
        <Ionicons name="arrow-back" size={24} color="#0d424e" />
      </TouchableOpacity>
      <Text style={styles.title}>Cadastro</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome"
        placeholderTextColor="#37515692"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#37515692"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#37515692"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TextInput
        style={styles.input}
        placeholder="Confirmar Senha"
        placeholderTextColor="#37515692"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}
