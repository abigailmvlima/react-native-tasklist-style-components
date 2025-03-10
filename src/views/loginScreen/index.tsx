// src/views/LoginScreen/index.tsx
import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./styles";

export function LoginScreen({ navigation }: { navigation: any }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Task List</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#4B0082"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        placeholderTextColor="#4B0082"
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("TaskList")}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}
