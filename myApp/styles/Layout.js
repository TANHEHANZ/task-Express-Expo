import { View, StatusBar } from "react-native";
import React from "react";
import { globalStyles } from "./globalStyles";
const Layout = ({ children }) => {
  return (
    <View style={globalStyles.container}>
      <StatusBar backgroundColor="#fff" />
      {children}
    </View>
  );
};

export default Layout;
