import { View, Text } from "react-native";
import Header from "../layout/Header";
import LoginForm from "../forms/LoginForm";

export default function LoginScreen() {
  const value = "Parent value";

  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <Header />
      <LoginForm test={value}>
        <Text>version 1.0</Text> 
      </LoginForm>
    </View>
  );
}
