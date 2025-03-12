import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "@/src/types/navigation"; // Se ainda não existir, criaremos este tipo
import styles from "./styles";

// Definir o tipo da navegação
type NavigationProp = StackNavigationProp<RootStackParamList, "TaskList">;

export function TaskListScreen() {
  const navigation = useNavigation<NavigationProp>(); // Definindo o navigation corretamente

  const [tasks, setTasks] = useState<string[]>([
    "Study for English exam",
    "Complete project report",
    "Workout session",
  ]);

  const handleDeleteTask = (index: number) => {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.arrow}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color="#4B0082" />
        </TouchableOpacity>
        <Text style={styles.title}>Task List</Text>
        <Text style={styles.title}></Text>
      </View>

      <FlatList
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.taskContainer}>
            <Text style={styles.taskText}>{item}</Text>
            <TouchableOpacity onPress={() => handleDeleteTask(index)}>
              <Ionicons name="trash" size={24} color="red" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
