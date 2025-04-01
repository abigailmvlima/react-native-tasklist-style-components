// index.tsx
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Container, Title, Input, Button, ButtonText } from "./styles";

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
    <Container>
      <Title>Add New Task</Title>
      <Input
        placeholder="Enter your task"
        placeholderTextColor="#4B0082"
        value={task}
        onChangeText={setTask}
      />
      <Button onPress={handleAddTask}>
        <ButtonText>Add Task</ButtonText>
      </Button>
    </Container>
  );
}
