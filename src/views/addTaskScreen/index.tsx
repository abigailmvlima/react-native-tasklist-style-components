import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";

export function AddTaskScreen() {
  const navigation = useNavigation<any>();
  const [task, setTask] = useState("");

  const handleAddTask = () => {
    if (task.trim() !== "") {
      // Aqui você pode adicionar a lógica para salvar a tarefa
      setTask("");
      navigation.navigate("TaskList");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add New Task</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your task"
        placeholderTextColor="#4B0082"
        value={task}
        onChangeText={setTask}
      />
      <TouchableOpacity style={styles.button} onPress={handleAddTask}>
        <Text style={styles.buttonText}>Add Task</Text>
      </TouchableOpacity>
    </View>
  );
}
