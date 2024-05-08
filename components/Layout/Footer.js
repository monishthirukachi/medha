import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
const Footer = (x) => {
  const route = useRoute();
  const navigation = useNavigation();
  const [role, SetRole] = useState("");

  useEffect(() => {
    const fetchRole = async () => {
      try {
        const storedRole = await AsyncStorage.getItem("role");
        SetRole(storedRole);
      } catch (error) {
        console.error("Error fetching role from AsyncStorage:", error);
      }
    };
    fetchRole();
  }, []);
  // AsyncStorage.getItem("role").then((value) => {
  //   // Use JSON.parse to convert the retrieved string back to an object
  //   const rol = JSON.parse(value);
  //   // Now you can use the 'role' object
  //   console.log(rol);
  // })
  const logout = () => {
    clearAuthToken();
  };
  const clearAuthToken = async () => {
    await AsyncStorage.removeItem("authToken");
    // console.log("auth token cleared");
    navigation.navigate("Login");
  };
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 25,
      }}
    >
      {role === "Admin" && (
        <TouchableOpacity
          style={{ justifyContent: "center", alignItems: "center" }}
          onPress={() => navigation.navigate("Admin")}
        >
          <AntDesign
            name="home"
            size={24}
            color="black"
            style={[route.name === "Admin" && styles.active]}
          />
          <Text>Home</Text>
        </TouchableOpacity>
      )}
      {role === "User" && (
        <TouchableOpacity
          style={{ justifyContent: "center", alignItems: "center" }}
          onPress={() => navigation.navigate("User")}
        >
          <AntDesign
            name="home"
            size={24}
            color="black"
            style={[route.name === "Admin" && styles.active]}
          />
          <Text>Home</Text>
        </TouchableOpacity>
      )}
      <TouchableOpacity
        style={{ justifyContent: "center", alignItems: "center" }}
        onPress={() => navigation.navigate("Account")}
      >
        <Ionicons
          name="person-outline"
          size={24}
          color="black"
          style={[route.name === "Account" && styles.active]}
        />
        <Text style={{ color: "#011010" }}>Account</Text>
      </TouchableOpacity>
      {/* {role === "Admin" && (<TouchableOpacity
          style={{ justifyContent: "center", alignItems: "center" }}
          onPress={() => navigation.navigate("Permission")}
        >
          <Feather
            name="users"
            size={24}
            color="black"
            style={[route.name === "UserInfo" && styles.active]}
          />
          <Text>Permissions</Text>
        </TouchableOpacity>)} */}
      {role === "User" && (
        <TouchableOpacity
          style={{ justifyContent: "center", alignItems: "center" }}
          onPress={() => navigation.navigate("Cart")}
        >
          <AntDesign
            name="shoppingcart"
            size={24}
            color="black"
            style={[route.name === "Cart" && styles.active]}
          />
          <Text>Cart</Text>
        </TouchableOpacity>)}
      {role === "Admin" && (
        <TouchableOpacity
          style={{ justifyContent: "center", alignItems: "center" }}
          onPress={() => navigation.navigate("UserInfo")}
        >
          <Feather
            name="users"
            size={24}
            color="black"
            style={[route.name === "UserInfo" && styles.active]}
          />
          <Text>UserInfo</Text>
        </TouchableOpacity>
      )}
      <TouchableOpacity
        style={{ justifyContent: "center", alignItems: "center" }}
        onPress={() => logout()}
      >
        <AntDesign name="logout" size={24} color="black" />
        <Text>LogOut</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  active: {
    color: "#d82731",
  },
});
export default Footer;
