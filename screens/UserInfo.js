import {
  Button,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Switch,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import { SafeAreaView } from "react-native-safe-area-context";
import ReadMore from "@fawazahmed/react-native-read-more";
import axios from "axios";
import Header from "../components/Layout/Header";
import user from "../api/models/user";

// const initialState = {
//   Create: false,
//   Read: false,
//   Update: false,
//   Delete: false,
// };

const UserInfo = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://192.168.43.74:8000/api/v1/auth/getUserDetails")
      .then((response) => {
        // console.log(response.data);
        setData(response.data.data);
        // console.log(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching user details:", error);
      });
  }, []);
  // }
  return (
    <Layout>
      <Header />
      <ScrollView>
        <SafeAreaView>
          <View style={styles.root}>
            {data &&
              data.map((user, index) => (
                <View style={styles.card}>
                  <View style={styles.textStyle}>
                    <ReadMore numberOfLines={2} style={styles.textStyle}>
                      <Text
                        style={{
                          fontSize: 20,
                          fontWeight: "bold",
                          // color: "#d82731",
                          // color: "red",
                        }}
                      >
                        User ID: {index}
                        {"\n"}
                      </Text>
                      <Text>
                        {"\n"}
                        User Name: {user.name}
                        {/* {setId(user._id)} */}
                        {"\n"}
                      </Text>
                      <Text>
                        Phone Number: {user.phone}
                        {"\n"}
                      </Text>
                      <Text>
                        Verification Status:{" "}
                        {user.verified ? "Verified" : "Yet to Verify"}
                        {"\n"}
                      </Text>
                      <Text>
                        Email: {user.email}
                        {"\n"}
                      </Text>
                      <Text>
                        Created at: {user.createdAt.substring(0, 10)}
                        {"\n"}
                      </Text>
                      <Text>
                        Last Updated at: {user.updatedAt.substring(0, 10)}
                        {"\n"}
                      </Text>
                      <Text>
                        Role: {user.role}
                        {"\n"}
                      </Text><Text>
                        Create: {(user?.Create)?"Allowed":"Not Allowed"}
                        {"\n"}
                      </Text><Text>
                        Read: {(user?.Read)?"Allowed":"Not Allowed"}
                        {"\n"}
                      </Text><Text>
                        Update: {(user?.Update)?"Allowed":"Not Allowed"}
                        {"\n"}
                      </Text><Text>
                        Delete: {(user?.Delete)?"Allowed":"Not Allowed"}
                        {"\n"}
                      </Text>
                      <Text> {"\n"}</Text>
                    </ReadMore>
                  </View>
                </View>
              ))}
          </View>
        </SafeAreaView>
      </ScrollView>
      {/* <View style={styles.footer}>
            <Footer />
          </View> */}
    </Layout>
  );
};

export default UserInfo;

const styles = StyleSheet.create({
  footer: {
    marginVertical: -300,
    display: "flex",
    width: "100%",
    // flex: 1,
    justifyContent: "flex-end",
    zIndex: 100,
    borderTopWidth: 1,
    borderColor: "lightgray",
    position: "absolute",
    bottom: 0,
    padding: 10,
    backgroundColor: "lightgray",
  },
  root: {
    // flex: 1,
    padding: 16,
    paddingBottom: 200,
  },
  textStyle: {
    fontSize: 14,
  },
  card: {
    backgroundColor: "white",
    // alignItems: "center",
    width: "auto",
    height: "auto",
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
});
