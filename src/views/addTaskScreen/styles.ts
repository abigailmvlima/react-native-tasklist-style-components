import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #e6ccff;
  padding: 0 20px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #4b0082;
`;

export const Input = styled.TextInput`
  width: 100%;
  border-bottom-width: 1px;
  margin-bottom: 20px;
  padding: 8px;
  color: #4b0082;
`;

export const Button = styled.TouchableOpacity`
  background-color: #4b0082;
  padding: 15px;
  border-radius: 5px;
  margin-top: 10px;
  width: 100%;
`;

export const ButtonText = styled.Text`
  color: #ffffff;
  font-size: 16px;
  text-align: center;
`;
