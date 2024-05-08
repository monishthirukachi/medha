import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Layout from '../components/Layout/Layout'
import Header from '../components/Layout/Header'
import Footer from '../components/Layout/Footer'

const Cart = () => {
  return (
    <Layout>
      <Header/>
      <View style={{ alignItems: "center", marginTop: 150 }}>
        <Text style={{ fontWeight: "bold", fontSize: 25 }}>
          Welcome to Cart Screen
        </Text>
      </View>
      {/* <View style={styles.footer}>
        <Footer />
      </View> */}
    </Layout>
  )
}

export default Cart

const styles = StyleSheet.create({footer: {
  marginVertical:-585,
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
},})