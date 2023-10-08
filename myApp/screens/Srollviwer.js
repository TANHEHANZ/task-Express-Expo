import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";
import Layout from "../styles/Layout";
import { colors } from "../styles/globalStyles";

const Srollviwer = () => {
  return (
    <Layout>
      <ScrollView style={styles.container}>
        <View style={styles.boxLarge} />
        <ScrollView horizontal>
          <View style={styles.boxSmall} />
          <View style={styles.boxSmall} />
          <View style={styles.boxSmall} />
        </ScrollView>
      </ScrollView>
    </Layout>
  );
};

export default Srollviwer;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  boxSmall: {
    width: 200,
    height: 200,
    marginBottom: 10,
    marginRight: 10,
    backgroundColor: colors.primary,
  },
  boxLarge: {
    width: 300,
    height: 300,
    marginBottom: 10,
    marginRight: 10,
    backgroundColor: colors.secondary,
  },
});
