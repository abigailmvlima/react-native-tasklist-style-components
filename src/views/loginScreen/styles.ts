import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #88d0e07b;
  padding-top: 100px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 100px;
  color: #0d424e;
`;

export const Input = styled.TextInput`
  width: 80%;
  border-bottom-width: 1px;
  margin-bottom: 20px;
  padding: 8px;
  color: #051d22;
`;

export const Button = styled.TouchableOpacity`
  background-color: #0d4754;
  padding: 15px;
  border-radius: 5px;
  margin-top: 15px;
  width: 80%;
`;

export const ButtonText = styled.Text`
  color: #ffffff;
  font-size: 16px;
  text-align: center;
`;

export const OrText = styled.Text`
  margin: 20px 0;
  font-size: 16px;
  color: #0d4754;
  text-align: center;
`;

export const LinkText = styled.Text`
  color: #2e6697;
  font-size: 16px;
  margin-top: 10px;
  text-decoration: underline;
`;
