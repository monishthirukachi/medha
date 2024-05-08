import {
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  TextInput,
  Button,
  Alert,
  Pressable,
  KeyboardAvoidingView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const img = require("./logo.png");
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Footer from "../components/Layout/Footer";

const Loginscreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [userRole, setUserRole] = useState(null); // State to store user role
  const navigation = useNavigation();
  const handleLogin = () => {
    const user = {
      email: email,
      password: password,
    };
    try {
      axios
        .post("http://192.168.43.74:8000/api/v1/auth/login", user)
        .then((response) => {
          const token = response.data.token;
          const role = response.data.user.role;
          const name = response.data.user.name;
          // console.log(response.data)
          if (token) {
            AsyncStorage.setItem("authtoken", JSON.stringify(token));
            AsyncStorage.setItem("name", name);
            AsyncStorage.setItem("role", role);
            // setUserRole(response.data.user.role);
            navigation.navigate(response.data.user.role);
            setEmail("")
            setPassword("")
          } else {
            Alert.alert("Login Error", "Invalid Email or Password");
          }
          //   // AsyncStorage.setItem("authToken", token);
        })
        .catch((error) => {
          Alert.alert("Login Error", "Invalid Email");
          console.log(error);
        });
    } catch (error) {
      console.log("Something went wrong");
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView>
        <Image source={img} style={styles.image} />
        <View style={styles.card}>
          <View>
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>
              Login to your Account
            </Text>
          </View>
          <View style={styles.box} marginTop={25}>
            <MaterialCommunityIcons name="email" size={24} color="black" />
            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              placeholder="Enter Email-address"
            ></TextInput>
          </View>
          <View style={styles.box}>
            <AntDesign name="lock" size={24} color="black" />
            <TextInput
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={true}
              placeholder="Enter Password"
            ></TextInput>
          </View>
          <View
            style={{
              justifyContent: "space-between",
              flexDirection: "row",
              width: 300,
            }}
          >
            <Text style={{ fontSize: 11 }}>Keep me logged in</Text>
            <Text style={{ color: "#d82731" }}>Forgot Password?</Text>
          </View>
          <View marginTop={30}>
            {/* <Button title="Login" color={"#d82731"}  /> */}
            <Pressable onPress={handleLogin} style={styles.button}>
              <Text style={{ color: "white", fontWeight: "bold" }}>LOGIN</Text>
            </Pressable>
          </View>
          <View marginTop={5}>
            <Pressable>
              <Text
                onPress={() => {
                  navigation.navigate("Register");
                }}
              >
                Don't have an account? Sign up
              </Text>
            </Pressable>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Loginscreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 100,
    alignSelf: "center",
    marginTop: 100,
  },
  card: {
    backgroundColor: "white",
    alignItems: "center",
    width: 350,
    height: 350,
    borderRadius: 16,
    borderWidth: 2,
    padding: 16,
    margin: 25,
    justifyContent: "space-evenly",
    ...Platform.select({
      ios: {
        shadowoffset: { width: 2, height: 2 },
        shadowColor: "#333",
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  box: {
    borderWidth: 1,
    flexDirection: "row",
    width: 300,
    gap: 10,
    borderRadius: 10,
    margin: 20,
    backgroundColor: "#D0d0d0",
    padding: 10,
  },
  button: {
    backgroundColor: "#d82731",
    margin: 6,
    borderRadius: 2,
    width: 100,
    padding: 4,
    alignItems: "center",
  },
});
