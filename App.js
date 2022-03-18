import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import { Provider as PaperProvider, TextInput, Button } from "react-native-paper";
export default function App() {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const _submitLogin = () => {
    if (userEmail.length < 5) {
      Alert.alert("Por favor, ingrese un correo electrónico");
      return;
    }
    if (userPassword.length < 5) {
      Alert.alert("Por favor, ingrese su contraseña");
      return;
    }
    axios
      .post("http://192.168.1.126:7650/api/auth/user", { email: userEmail, password: userPassword, device_name: "test" })
      .then((rsp) => {
        console.log('Login Success');
        console.log(rsp.data);
      })
      .catch((err) => {
        console.log("Login Failed");
        console.log(err.status);
        console.log(err.response);
      });
  };

  return (
    <PaperProvider>
      < View style={styles.container}>
        <TextInput
          node="outlined"
          label="Enail"
          value={userEmail}
          onChangeText={(t) => {
            setuserEmail(t);
          }}
          style={stykes.textInput}

        />
        <TextInput
          label="Password"
          secureTextEntry={true}
          value={userPassword}
          onChangeText={(t) => {
            setUserPassword(t);

          }}
          style={stykes.textInput}
        />
        <Button mode="contained" onPress={_submitLogin}>
          Iniciar Sesión
        </ Button>
      </View>
    </PaperProvider>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 16,
    marginVertical: 32,
  },
  textInput: { marginBottom: 8, width: "100%" },
  submitBtn: { marginTop: 16, width: "100%" },


});