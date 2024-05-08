import { View, Text, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import Layout from "../components/Layout/Layout";
import Header from "../components/Layout/Header";

const Home = () => {
  return (
    <Layout>
      <Header />
    </Layout>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});