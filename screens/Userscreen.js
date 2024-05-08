import { StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import Header from "../components/Layout/Header";
import Banner from "../components/Banner/Banner";
import Categories from "../components/Category/Categories";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { UserType } from "../UserContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Userscreen = () => {
  // const {Userid, setUserid} = useContext(UserType);
  const [name, setName] = useState("");
  const [create, setCreate] = useState(false);
  const [read, setRead] = useState(false);
  const [update, setUpdate] = useState(false);
  const [del, setDel] = useState(false);
  // const navigation = useNavigation();
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const nm = await AsyncStorage.getItem("name");
        setName(nm)
        // console.log(nm);
        const response = await axios.get(
          `http://192.168.43.74:8000/api/v1/auth/profile/${nm}`
        );
        // console.log(response.data)
        // console.log(response.data.usr[0].Create)
        const userPermissions = response.data.usr[0];
        setCreate(userPermissions.Create);
        setRead(userPermissions.Read);
        setUpdate(userPermissions.Update);
        setDel(userPermissions.Delete);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchUserProfile();
  }, []);

  return (
    <Layout>
      <Header />
      <Categories />
      <Banner />

      <View style={{ alignItems: "center", marginTop: 150 }}>
        <Text style={{ fontWeight: "bold", fontSize: 25 }}>
          Welcome {name}
        </Text>
        <Text style={{ marginTop: 30, fontSize: 18 }}>{name}, You have the following permissions:</Text>
        <Text>Create: {create ? 'Yes' : 'No'}</Text>
        <Text>Read: {read ? 'Yes' : 'No'}</Text>
        <Text>Update: {update ? 'Yes' : 'No'}</Text>
        <Text>Delete: {del ? 'Yes' : 'No'}</Text>
      </View>
    </Layout>
  );
};

export default Userscreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
