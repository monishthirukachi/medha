import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Loginscreen from "../screens/Loginscreen";
import Registerscreen from "./../screens/Registerscreen";
import Homescreen from "../screens/Homescreen";
import Adminscreen from "../screens/Adminscreen";
import Userscreen from "../screens/Userscreen";
import Account from "../screens/Account";
import Cart from "../screens/Cart";
import UserInfo from "../screens/UserInfo";
import Permissionscreen from './../screens/Permissionscreen';

const Stacknavigation = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={Loginscreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Register"
          component={Registerscreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Admin"
          component={Adminscreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="User"
          component={Userscreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Account"
          component={Account}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Cart"
          component={Cart}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="UserInfo"
          component={UserInfo}
        /><Stack.Screen
        options={{ headerShown: false }}
        name="Permission"
        component={Permissionscreen}
      />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Stacknavigation;

const styles = StyleSheet.create({});
