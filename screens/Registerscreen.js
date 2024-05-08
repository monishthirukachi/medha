import {
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  TextInput,
  Button,
  Pressable,
  KeyboardAvoidingView,
  ScrollView,
  Touchable,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import RoleDropdown from "./Roledropdown";
import axios, { Axios } from "axios";

const img = require("./logo.png");
const Registerscreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Select Role:");
  const navigation = useNavigation();

  // const [selectedRole, setSelectedRole] = useState("Select Role:-");
  const handleRegister = async () => {
    // debugger;
    //   e.preventDefault();
    try {
      const res = await axios.post(
        "http://192.168.43.74:8000/api/v1/auth/register",
        user
      );
      if (res && res.data.success) {
        Alert.alert(res && res.data.message);
        navigation.navigate("Login");
      } else {
        Alert.alert(res.data.message);
        navigation.navigate("Login");
      }
    } catch (error) {
      console.log(error);
      Alert.alert("something went wrong");
    }
  };
  const user = {
    name: name,
    phone: phone,
    email: email,
    password: password,
    role: role,
  };

  //   const url = "http://localhost:8000/register";

  //   axios
  //     .post(url, user)
  //     .then((response) => {
  //       console.log(response);
  //       Alert.alert(
  //         "Registration successful",
  //         "You have been registered Successfully"
  //       );
  //       setName("");
  //       setPhone("");
  //       setEmail("");
  //       setPassword("");
  //     })
  //     .catch((error) => {
  //       Alert.alert(
  //         "Registration Error",
  //         "An error occurred while registering"
  //       );
  //       console.log("registration failed", error);
  //     });
  // };
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView>
        <Image source={img} style={styles.image} />
        <View style={styles.card}>
          <View>
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>
              Register your Account
            </Text>
          </View>
          <View style={styles.box} marginTop={25}>
            <Fontisto name="person" size={24} color="black" />
            <TextInput
              value={name}
              onChangeText={(text) => setName(text)}
              placeholder="Enter Name"
            ></TextInput>
          </View>
          <View style={styles.box}>
            <Ionicons name="call" size={24} color="black" />
            <TextInput
              value={phone}
              onChangeText={(text) => setPhone(text)}
              placeholder="Enter Phone-No"
            ></TextInput>
          </View>
          <View style={styles.box}>
            <MaterialCommunityIcons name="email" size={24} color="black" />
            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              placeholder="Enter Email-address"
            ></TextInput>
          </View>
          <View style={styles.box}>
            <Entypo name="lock" size={24} color="black" />
            <TextInput
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={true}
              placeholder="Enter Password"
            ></TextInput>
          </View>
          {/* <View style={styles.box}>
            <Entypo name="lock" size={24} color="black" />
            <TextInput
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={true}
              placeholder="Re-Enter Password"
            ></TextInput>
          </View> */}
          <View>
            <RoleDropdown
              selectedRole={role}
              onSelect={(role) => setRole(role)}
            />
          </View>
          <View marginTop={30}>
            {/* <Button title="Login" color={"#d82731"}  /> */}
            <Pressable onPress={handleRegister} style={styles.button}>
              <Text style={{ color: "white", fontWeight: "bold" }}>
                REGISTER
              </Text>
            </Pressable>
          </View>
          <View marginTop={5}>
            <Pressable>
              <Text
                onPress={() => {
                  navigation.navigate("Login");
                }}
              >
                Aldready have an account? Log in
              </Text>
            </Pressable>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
export default Registerscreen;

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
    marginTop:80
  },
  card: {
    backgroundColor: "white",
    alignItems: "center",
    width: "auto",
    height: "auto",
    borderRadius: 16,
    borderWidth: 2,
    padding: 16,
    margin: 20,
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
    margin: 10,
    backgroundColor: "#D0d0d0",
    padding: 10,
  },
  button: {
    backgroundColor: "#d82731",
    borderRadius: 3,
    width: 100,
    padding: 5,
    alignItems: "center",
    borderWidth: 1,
  },
});
