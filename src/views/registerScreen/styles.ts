import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #88d0e07b;
  padding: 100px 20px 0;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #0d424e;
`;

export const Input = styled.TextInput`
  width: 100%;
  border-bottom-width: 1px;
  margin-bottom: 20px;
  padding: 8px;
  color: #2d9bb3;
`;

export const Button = styled.TouchableOpacity`
  background-color: #0d424e;
  padding: 15px;
  border-radius: 5px;
  margin-top: 20px;
  width: 100%;
`;

export const ButtonText = styled.Text`
  color: #ffffff;
  font-size: 16px;
  text-align: center;
`;

export const ArrowBack = styled.TouchableOpacity`
  position: absolute;
  top: 40px;
  left: 20px;
  z-index: 1;
`;
