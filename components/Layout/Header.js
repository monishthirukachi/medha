import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
const Header = () => {
  const [searchText, setSearchText] = useState("");
  //funciotn for search
  const handleSearch = () => {
    console.log(searchText);
    //   setSearchText("");
  };
  return (
    <View
      style={{
        height: 90,
        backgroundColor: "lightgray",
      }}
    >
      <View style={styles.container}>
        <Pressable onPress={handleSearch} style={styles.inputBox}>
          <TextInput
            style={styles.textBox}
            value={searchText}
            onChangeText={(text) => {
              setSearchText(text), console.log(text);
            }}
          />
        </Pressable>

        <TouchableOpacity style={styles.searchBtn}>
          <Pressable onPress={handleSearch}>
            <FontAwesome name="search" style={styles.icon} />
          </Pressable>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  textBox: {
    // right: "5%",
    padding: 10,
  },
  inputBox: {
    borderWidth: 0.5,
    width: "90%",
    position: "absolute",
    left: 15,
    height: 40,
    color: "#000000",
    backgroundColor: "#ffffff",
    paddingLeft: 10,
    fontSize: 16,
    borderRadius: 5,
  },
  searchBtn: {
    position: "absolute",
    left: "97%",
    borderWidth: 0.5,
    height: 40,
    width: 30,
    position: "absolute",
    borderRadius: 5,
    color: "#000000",
    backgroundColor: "#d82731",
  },
  icon: {
    color: "white",
    fontSize: 18,
    padding: 6.5,
    alignSelf: "center",
  },
});

export default Header;
