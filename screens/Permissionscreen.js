import { Alert, Button, StyleSheet, Switch, Text, View } from "react-native";
import React, { useState } from "react";
import RoleDropdown from "./Userdropdown";
import Layout from "../components/Layout/Layout";
import axios, { Axios } from "axios";

const Permissionscreen = () => {
  const [create, setCreate] = useState(false);
  const [read, setRead] = useState(false);
  const [update, setUpdate] = useState(false);
  const [del, setDel] = useState(false);
  const [role, setRole] = useState("Select User: ");

  const handleSave = async () => {
    try {
      const res = await axios.post(
        "http://192.168.43.74:8000/api/v1/auth/permission",
        usr
      );
      if (res && res.data.success) {
        Alert.alert(res && res.data.message);
      } else {
        Alert.alert(res.data.message);
      }
      //   console.log(res);
      setCreate(false);
      setRead(false);
      setUpdate(false);
      setDel(false);
    } catch (error) {
      console.log(error);
      Alert.alert("something went wrong");
    }
  };

  const usr = {
    create: create,
    read: read,
    update: update,
    del: del,
    name: role,
  };
  return (
    <Layout>
      <View>
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>Select User:</Text>
        <View>
          <RoleDropdown
            selectedRole={role}
            onSelect={(role) => setRole(role)}
          />
        </View>
        <Text style={{ fontWeight: "bold", fontSize: 15 }}>
          Permissions: {"\n"}
        </Text>
        <View style={{ flexDirection: "column" }}>
          <View style={{ flexDirection: "row" }}>
            <Text>Create {"\n"}</Text>
            <Switch
              value={create}
              onValueChange={(value) => setCreate(value)}
            />
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text>Read</Text>
            <Switch value={read} onValueChange={(value) => setRead(value)} />
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text>Update</Text>
            <Switch
              value={update}
              onValueChange={(value) => setUpdate(value)}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between  ",
            }}
          >
            <Text>Delete</Text>
            <Switch value={del} onValueChange={(value) => setDel(value)} />
          </View>
        </View>
        <View>
          <Button title="Save" onPress={() => handleSave()} />
        </View>
      </View>
    </Layout>
  );
};

export default Permissionscreen;

const styles = StyleSheet.create({});
