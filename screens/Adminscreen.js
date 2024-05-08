import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Layout from "../components/Layout/Layout";
import Header from "../components/Layout/Header";
import Banner from "../components/Banner/Banner";
import Categories from "../components/Category/Categories";
import { useNavigation } from "@react-navigation/native";
// const pokemons = require("json-pokemon");
const Adminscreen = () => {
  const navigation = useNavigation();
  return (
    <Layout>
      <Header />
      <Categories />
      <Banner />
      <View style={{ alignItems: "center", marginTop: 150 }}>
        <Text style={{ fontWeight: "bold", fontSize: 25 }}>
          Welcome to Adminscreen
        </Text>
      </View>
      {/* <View marginTop={30} style={{ alignItems: "center" }}> */}
        {/* <Button title="Login" color={"#d82731"}  /> */}
        {/* <Pressable
          onPress={() => navigation.navigate("UserInfo")}
          style={styles.button}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>
            Get User Info --->
          </Text>
        </Pressable> */}
      {/* </View> */}
      <View marginTop={10} style={{ alignItems: "center" }}>
        {/* <Button title="Login" color={"#d82731"}  /> */}
        <Pressable
          onPress={() => navigation.navigate("Permission")}
          style={styles.button}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>
            User Permissions
          </Text>
        </Pressable>
      </View>
    </Layout>
  );
};

export default Adminscreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#d82731",
    margin: 6,
    borderRadius: 5,
    width: "auto",
    padding: 15,
    alignItems: "center",
  },
});
