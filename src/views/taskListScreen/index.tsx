import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "@/src/types/navigation"; // Se ainda não existir, criaremos este tipo
import { apiClient } from "@/src/api";
import styles from "./styles";

// Definir o tipo da navegação
type NavigationProp = StackNavigationProp<RootStackParamList, "TaskList">;

export function TaskListScreen() {
  const navigation = useNavigation<NavigationProp>();
  const [tasks, setTasks] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const response = await apiClient.getTasks();
      setTasks(response.data);
    } catch (error) {
      Alert.alert("Error", "Failed to fetch tasks");
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteTask = async (taskId: number) => {
    try {
      await apiClient.deleteTask(taskId);
      const updatedTasks = tasks.filter((task) => task.id !== taskId);
      setTasks(updatedTasks);
    } catch (error) {
      Alert.alert("Error", "Failed to delete task");
    }
  };

  const handleCreateTask = async () => {
    if (!newTask.trim()) {
      Alert.alert("Error", "Task cannot be empty");
      return;
    }
    try {
      const newTaskResponse = await apiClient.createTask(newTask); // ✅ Retorna os dados corretamente
      setTasks((prevTasks) => [...prevTasks, newTaskResponse]); // ✅ Adiciona a nova tarefa corretamente
      setNewTask("");
    } catch (error) {
      Alert.alert("Error", "Failed to create task");
    }
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
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter new task"
          value={newTask}
          onChangeText={setNewTask}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleCreateTask}>
          <Ionicons name="add-circle" size={36} color="#4B0082" />
        </TouchableOpacity>
      </View>

      {loading ? (
        <Text style={styles.loadingText}>Loading...</Text>
      ) : (
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.taskContainer}>
              <Text style={styles.taskText}>{item.task}</Text>
              <TouchableOpacity onPress={() => handleDeleteTask(item.id)}>
                <Ionicons name="trash" size={24} color="red" />
              </TouchableOpacity>
            </View>
          )}
        />
      )}
    </View>
  );
}
