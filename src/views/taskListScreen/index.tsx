// index.tsx
import React, { useState, useEffect } from "react";
import { FlatList, TextInput, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "@/src/types/navigation";
import { apiClient } from "@/src/api";
import {
  Container,
  Header,
  Title,
  InputContainer,
  Input,
  AddButton,
  LogoutButton,
  TaskContainer,
  TaskText,
  LoadingText,
} from "./styles";

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
      const newTaskResponse = await apiClient.createTask(newTask);
      setTasks((prevTasks) => [...prevTasks, newTaskResponse]);
      setNewTask("");
    } catch (error) {
      Alert.alert("Error", "Failed to create task");
    }
  };

  const handleLogout = () => {
    navigation.navigate("Login", {});
  };

  return (
    <Container>
      <LogoutButton onPress={handleLogout}>
        <Ionicons name="close-outline" size={28} color="#083c48" />
      </LogoutButton>

      <Header>
        <Title>Lista de Tarefas</Title>
      </Header>

      <InputContainer>
        <Input
          placeholder="Insira a tarefa"
          value={newTask}
          onChangeText={setNewTask}
        />
        <AddButton onPress={handleCreateTask}>
          <Ionicons name="add-circle" size={36} color="#0d4754" />
        </AddButton>
      </InputContainer>

      {loading ? (
        <LoadingText>Loading...</LoadingText>
      ) : (
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TaskContainer>
              <TaskText>{item.task}</TaskText>
              <AddButton onPress={() => handleDeleteTask(item.id)}>
                <Ionicons name="trash" size={24} color="#fa0000" />
              </AddButton>
            </TaskContainer>
          )}
        />
      )}
    </Container>
  );
}
