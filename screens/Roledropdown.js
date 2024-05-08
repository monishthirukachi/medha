import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";

const RoleDropdown = ({ selectedRole, onSelect }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const roles = ["Admin", "User"];

  const handleRoleSelect = (role) => {
    onSelect(role);
    setDropdownVisible(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.dropdown}
        onPress={() => setDropdownVisible(!dropdownVisible)}
      >
        <Text>{selectedRole}</Text>
      </TouchableOpacity>

      {dropdownVisible && (
        <FlatList
          data={roles}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.dropdownItem}
              onPress={() => handleRoleSelect(item)}
            >
              <Text>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
          style={styles.dropdownList}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "black",
    width: 300,
    borderRadius: 10,
    overflow: "hidden",
    marginTop: 10,
    marginHorizontal: 20,
  },
  dropdown: {
    height: 50,
    width: "100%",
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: "center",
    backgroundColor: "#D0d0d0",
  },
  dropdownList: {
    width: "100%",
    backgroundColor: "#D0d0d0",
    borderWidth: 1,
    borderColor: "black",
    maxHeight: 150,
  },
  dropdownItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "black",
    alignItems: "center",
  },
});

export default RoleDropdown;
