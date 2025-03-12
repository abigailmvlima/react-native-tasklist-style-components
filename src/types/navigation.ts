export type RootStackParamList = {
  Welcome: undefined;
  Login: { email?: string };
  Register: undefined;
  TaskList: undefined;
  AddTask: { taskId: string };
};
