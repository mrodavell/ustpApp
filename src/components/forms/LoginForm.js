import { View, TextInput, Button, Alert } from "react-native";
import MySwipeable from "../demo/MySwipeable";
import React from "react";

export default function LoginForm({ test, children }) {
  const [typeText, setTypeText] = React.useState("");
  const loginHandler = () => {
    Alert.alert("Login Button Has Been Clicked");
  };

  const handleOnFocus = () => {
    Alert.alert("Text is in focus");
  };

  const handleOnBlur = () => {
    Alert.alert("Text is out focus");
  };

  return (
    <View style={{ marginTop: 10 }}>
      <TextInput
        style={{
          borderWidth: 1,
          paddingLeft: 10,
          width: 250,
          height: 50,
          borderRadius: 8,
        }}
        placeholder="Email"
        value={test}
        onChangeText={setTypeText}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
      />
      <TextInput
        style={{
          borderWidth: 1,
          paddingLeft: 10,
          width: 250,
          height: 50,
          borderRadius: 8,
          marginTop: 10,
        }}
        placeholder="Password"
        secureTextEntry
      />
      <View style={{ marginTop: 10 }}>
        <Button title="Login" onPress={loginHandler} />
      </View>
      <View style={{ marginTop: 10, alignItems: "center" }}>{children}</View>
    </View>
  );
}
