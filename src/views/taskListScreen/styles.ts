import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #49818e7c;
  padding: 10px 25px;
`;

export const Header = styled.View`
  align-items: center;
  margin: 35px 0;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #0d424e;
`;

export const InputContainer = styled.View`
  flex-direction: row;
  margin: 10px 0;
  border-radius: 8px;
`;

export const Input = styled.TextInput`
  flex: 1;
  height: 40px;
  border: 1px solid #ccc;
  background-color: #ffffff;
  border-radius: 8px;
  padding: 0 10px;
  font-size: 16px;
`;

export const AddButton = styled.TouchableOpacity`
  margin-left: 10px;
  justify-content: center;
`;

export const LogoutButton = styled.TouchableOpacity`
  position: absolute;
  right: 16px;
  top: 16px;
`;

export const TaskContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: 15px;
  border-radius: 5px;
  margin: 5px 0;
  shadow-color: #000;
  shadow-opacity: 0.1;
  shadow-offset: 0px 2px;
  shadow-radius: 4px;
  elevation: 2;
`;

export const TaskText = styled.Text`
  font-size: 16px;
  color: #8dc4cb;
`;

export const LoadingText = styled.Text`
  font-size: 16px;
  color: #546b6d;
  text-align: center;
`;
