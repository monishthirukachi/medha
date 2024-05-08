import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Categoriesdata } from "../../data/Categorydata";
const Categories = () => {
  const navigation = useNavigation();
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        {Categoriesdata?.map((item) => (
          <View key={item._id}>
            <TouchableOpacity
              style={styles.catContainer}
              onPress={() => navigation.navigate(item.path)}
            >
              <FontAwesome name="train" size={24} color="black" />
              <Text style={styles.catTitle}>{item.name}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    padding: 5,
    flexDirection: "row",
  },
  catContainer: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
  },
  catIcon: {
    fontSize: 30,
    verticalAlign: "top",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
  },
  catTitle: {
    fontSize: 12,
    // width: 150,
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
  },
});
export default Categories;
